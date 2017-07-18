// Initialize the scene, camera, and global variables
const scene = new THREE.Scene(),
    camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 1000);

// Position the camera back
camera.position.z = 200;

// Initialize the rest of the global variables
let earthMesh,
    starMesh,
    path,
    rotating = false,
    rotatingStep = 0.001;

// Initialize the renderer and append to the HTML
const renderer = new THREE.WebGLRenderer({alpha: true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Set up camera orbital controls, auto rotation, and zoom bounds
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.minDistance = 30;
controls.maxDistance = 500;
controls.autoRotate = true;
controls.autoRotateSpeed = 3.0;

// Create new eath, star field, and launch path geometries
const earthGeo = new THREE.SphereGeometry(24, 32, 32),
    starGeo = new THREE.SphereGeometry(500, 32, 32),
    pathGeo = new THREE.BufferGeometry(),
    shipGeo = new THREE.SphereGeometry(0.3, 15, 15);

// Initialize the texture loader
const loader = new THREE.TextureLoader();

// Load the textures
const earthMap = loader.load('./img/earthmap1k.jpg'),
    earthBump = loader.load('./img/earthbump1k.jpg'),
    earthSpec = loader.load('./img/earthspec1k.jpg'),
    starfield = loader.load('./img/starfield.jpg');

// Create the materials
const earthMat = new THREE.MeshPhongMaterial({map: earthMap, bumpMap: earthBump, bumpScale: 0.5, specularMap: earthSpec, specular: 0x222222}),
    starMat = new THREE.MeshBasicMaterial({map: starfield, side: THREE.BackSide}),
    pathMat = new THREE.LineBasicMaterial({color: 0xFFFFFF, linewidth: 5}),
    shipMat = new THREE.MeshStandardMaterial({emissive: 0xffffee, emissiveIntensity: 1, color: 0x000000});

// Create the meshes
starMesh = new THREE.Mesh(starGeo, starMat);
path = new THREE.Line(pathGeo, pathMat);
earthMesh = new THREE.Mesh(earthGeo, earthMat);

// Add meshes to the scene
earthMesh.add(starMesh);
earthMesh.add(path);
scene.add(earthMesh);

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
scene.add(ambientLight);
scene.add(directionalLight);
scene.add(shipContainer);

// setTimeout(() => {
//     selection = {
//         'origin': 'florida',
//         'trajectory': 0,
//         'orbit': 'meo',
//         'new': true
//     }
// }, 5000);

// setTimeout(() => {
//     selection = {
//         'origin': 'vandenberg',
//         'trajectory': 1,
//         'orbit': 'meo',
//         'new': true
//     };
// }, 20000);

// Start the rendering loop
// render();

// The render loop
function render() {
    requestAnimationFrame(render);

    // Update the orbital controls
    controls.update();

    checkState();

    renderer.render(scene, camera);
}

// Reset the render area on window resize
$(window).on('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
