import React, {Component} from 'react';
import $ from 'jquery';
import * as THREE from 'three';
import Orbit from 'three-orbit-controls';
import '../App.css';

export default class Viewer extends Component {
    constructor(props) {
        super(props);

        /////////////////////////////////////

        // Initialize immutable global variables
        this.zoom = {
            'florida': {
                'x': 4,
                'y': 15,
                'camera': {
                    'x': 3.5,
                    'y': 10.6,
                    'z': 21.1
                }
            },
            'vandenberg': {
                'x': -17,
                'y': 22,
                'camera': {
                    'x': -9.55,
                    'y': 13.85,
                    'z': 17.2
                }
            }
        };

        // Initialize mutable global variables
        this.selection = {};
        this.zoomStep = 300;
        this.outStep = 400;
        this.plotStart = false;
        this.zoomStart = false;
        this.pathStart = false;
        this.outStart = false;
        this.drawCount = 0;
        // this.startX;
        // this.startY;
        // this.endX;
        // this.endY;
        // this.stepX;
        // this.stepY;
        // this.stepZ;
        // this.lookX;
        // this.lookY;
        // this.lookZ;

        /////////////////////////////////////

        const OrbitControls = Orbit(THREE);

        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 1000);

        // Position the camera back
        this.camera.position.z = 200;

        // Initialize the rest of the global variables
        // this.earthMesh;
        // this.starMesh;
        // this.path;
        this.rotating = false;
        this.rotatingStep = 0.001;

        // Initialize the renderer and append to the HTML
        this.renderer = new THREE.WebGLRenderer({alpha: true});

        // Set up camera orbital controls, auto rotation, and zoom bounds
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.minDistance = 30;
        this.controls.maxDistance = 500;
        this.controls.autoRotate = true;
        this.controls.autoRotateSpeed = 3.0;

        // Create new eath, star field, and launch path geometries
        const earthGeo = new THREE.SphereGeometry(24, 32, 32),
            starGeo = new THREE.SphereGeometry(500, 32, 32),
            pathGeo = new THREE.BufferGeometry(),
            shipGeo = new THREE.SphereGeometry(0.3, 15, 15);

        // Initialize the texture loader
        const loader = new THREE.TextureLoader();

        // Load the textures
        const earthMap = loader.load('../img/earthmap1k.jpg'),
            earthBump = loader.load('../img/earthbump1k.jpg'),
            earthSpec = loader.load('../img/earthspec1k.jpg'),
            starfield = loader.load('../img/starfield.jpg');

        // Create the materials
        const earthMat = new THREE.MeshPhongMaterial({map: earthMap, bumpMap: earthBump, bumpScale: 0.5, specularMap: earthSpec, specular: 0x222222}),
            starMat = new THREE.MeshBasicMaterial({map: starfield, side: THREE.BackSide}),
            pathMat = new THREE.LineBasicMaterial({color: 0xFFFFFF, linewidth: 5}),
            shipMat = new THREE.MeshStandardMaterial({emissive: 0xffffee, emissiveIntensity: 1, color: 0x000000});

        // Create the meshes
        this.starMesh = new THREE.Mesh(starGeo, starMat);
        this.path = new THREE.Line(pathGeo, pathMat);
        this.earthMesh = new THREE.Mesh(earthGeo, earthMat);

        // Add meshes to the scene
        this.earthMesh.add(this.starMesh);
        this.earthMesh.add(this.path);
        this.scene.add(this.earthMesh);

        // Create lights
        const ambientLight = new THREE.AmbientLight(0x404040, 2),
            directionalLight = new THREE.DirectionalLight(0x404040, 4),
            shipLight = new THREE.PointLight(0xffee88, 5, 100, 2);

        directionalLight.position.set(3, 3, 3);
        directionalLight.target.position.set(0, 0, 0);

        const shipContainer = new THREE.Object3D();

        shipLight.add(new THREE.Mesh(shipGeo, shipMat));
        shipLight.position.set(0, 0, 0);
        shipLight.castShadow = true;

        shipContainer.add(shipLight);

        // Add lights to the scene
        this.scene.add(ambientLight);
        this.scene.add(directionalLight);
        this.scene.add(shipContainer);
    }

    checkState() {
        if (this.selection['new']) {
            // Reset state variables and start animation pipeline
            this.resetState();
            this.plotStart = true;
            this.selection['new'] = false;
        }

        if (this.plotStart) {
            // Plot the launch path coordinates and place the ship at the launch origin
            this.plotPath();
            this.plotShip();

            // Move down the pipeline
            this.plotStart = false;
            this.zoomStart = true;
        }

        if (this.zoomStart) {
            this.zoomIn();

            this.zoomStep--;

            if (this.zoomStep === 0) {
                this.zoomStart = false;
                this.zoomStep = 300;

                this.pathStart = true;
                this.outStart = true;

                this.controls.autoRotate = true;
                this.controls.enabled = true;
            }
        }

        if (this.pathStart) {
            // Stop drawing if all points are displayed
            if (this.path.geometry.getAttribute('position') && this.drawCount < this.MAX_POINTS) {
                this.drawCount++;
                this.updateShip();
            }

            // Reset the ship rotation and position once finished
            if (this.path.geometry.getAttribute('position') && this.drawCount === this.MAX_POINTS) {
                this.resetShip();
            }
        }

        if (this.outStart) {
            this.zoomOut();

            this.outStep--;

            if (this.outStep === 0) {
                this.outStart = false;
                this.outStep = 400;
            }
        }

        // Rotate the earth incrementally
        if (this.rotating) {
            this.earthMesh.rotation.y += this.rotatingStep;
        }

        // Update the draw range with the incremeneted draw count
        this.path.geometry.setDrawRange(0, this.drawCount);
    }

    plotPath() {
        // Stop rotation and camera controls during the plot and zoom in
        this.controls.autoRotate = false;
        this.rotating = false;
        this.controls.enabled = false;

        // Plot the launch path
        this.setPath(this.selection['origin'], this.selection['trajectory'], this.selection['orbit']);

        // camera.lookAt(new THREE.Vector3(
        //     zoom[this.selection['origin']]['camera']['x'],
        //     zoom[this.selection['origin']]['camera']['y'],
        //     zoom[this.selection['origin']]['camera']['z']
        // ));
    }

    zoomIn() {
        // Set the camera movement variables at the start of the zoom
        if (this.zoomStep === 300) {
            this.startX = this.camera.position.x;
            this.startY = this.camera.position.y;
            this.endX = this.zoom[this.selection['origin']]['x'];
            this.endY = this.zoom[this.selection['origin']]['y'];
            this.stepX = (this.endX - this.startX) / 300;
            this.stepY = (this.endY - this.startY) / 300;
            this.stepZ = (30 - this.camera.position.z) / 200;
        }

        // Tween direction from the globe to the launch origin in the first 100 frames
        if (this.zoomStep > 200) {
            let zoomIn = this.zoom[this.selection['origin']]['camera']
            this.lookX = (zoomIn['x'] / 100) * Math.abs(300 - this.zoomStep);
            this.lookY = (zoomIn['y'] / 100) * Math.abs(300 - this.zoomStep);
            this.lookZ = (zoomIn['z'] / 100) * Math.abs(300 - this.zoomStep);
        }

        // Camera direction at globe or launch origin
        this.camera.lookAt(new THREE.Vector3(this.lookX, this.lookY, this.lookZ));

        // Move the camera position one step
        this.camera.position.x += this.stepX;
        this.camera.position.y += this.stepY;

        // Zoom faster for a panoramic view
        if (this.zoomStep > 100) {
            this.camera.position.z += this.stepZ;
        }
    }

    zoomOut() {
        this.stepZ = 170 / 400;

        // Tween direction from the launch origin to the globe in the first 100 frames
        if (this.outStep > 300) {
            let zoomOut = this.zoom[this.selection['origin']]['camera'];
            // let zoomOut = shipLight.position;
            this.lookX = zoomOut['x'] - (zoomOut['x'] / 100) * Math.abs(400 - this.outStep);
            this.lookY = zoomOut['y'] - (zoomOut['y'] / 100) * Math.abs(400 - this.outStep);
            this.lookZ = zoomOut['z'] - (zoomOut['z'] / 100) * Math.abs(400 - this.outStep);
        }

        // Camera direction at globe or launch origin
        this.camera.lookAt(new THREE.Vector3(this.lookX, this.lookY, this.lookZ));

        // Zoom out one step
        this.camera.position.z += this.stepZ;
    }

    plotShip() {
        // Rotate the ship plane to match the launch path plane
        let shipRot = this.pathRotations[this.selection['origin']][this.selection['trajectory']]
        this.shipContainer.rotation.set(-shipRot['x'], -shipRot['y'], -shipRot['z']);

        // Set the ship's initial position to the launch origin
        let positions = this.path.geometry.attributes.position.array
        this.shipLight.position.set(positions[0], positions[1], positions[2]);
    }

    updateShip() {
        // Update the ship's position to the current launch path coordinate
        let positions = this.path.geometry.attributes.position.array
        this.shipLight.position.set(positions[this.drawCount * 3 - 3], positions[this.drawCount * 3 - 2], positions[this.drawCount * 3 - 1]);
    }

    resetShip() {
        // Reset the ships position to the scene origin
        this.shipContainer.rotation.set(0, 0, 0);
        this.shipLight.position.set(0, 0, 0);
    }

    resetState() {
        // Reset all state variables
        this.zoomStep = 300;
        this.outStep = 400;
        this.zoomStart = false;
        this.pathStart = false;
        this.outStart = false;
    }

    // componentDidMount() {
    //     const viewer = document.getElementById('viewer');
    //     this.renderer.setSize($(viewer).width(), $(viewer).height());
    //     viewer.appendChild(this.renderer.domElement);
    //
    //     // this.renderScene();
    // }

    // renderScene() {
    //     requestAnimationFrame(this.renderScene);
    //
    //     // Update the orbital controls
    //     this.controls.update();
    //
    //     this.checkState();
    //
    //     this.renderer.render(this.scene, this.camera);
    // }

    getInitialState() {
        return {millis: Date.now(), timezoneOffset: new Date().getTimezoneOffset(), request: 0};
    }

    componentDidMount() {
        this.setState({
            request: requestAnimationFrame(this.tick)
        });
    }

    tick() {
        this.setState({
            millis: Date.now(),
            request: requestAnimationFrame(this.tick)
        });

        console.log('tick');
    }

    render() {
        return (
            <div className="viewer" id="viewer">
                {/* <h1>Viewer</h1> */}
            </div>
        );
    }
}
