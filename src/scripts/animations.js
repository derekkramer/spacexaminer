// Initialize immutable global variables
const zoom = {
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
let selection = {},
    zoomStep = 300,
    outStep = 400,
    plotStart = false,
    zoomStart = false,
    pathStart = false,
    outStart = false,
    drawCount = 0,
    startX,
    startY,
    endX,
    endY,
    stepX,
    stepY,
    stepZ,
    lookX,
    lookY,
    lookZ;

function checkState(){
    if(selection['new']){
        // Reset state variables and start animation pipeline
        resetState();
        plotStart = true;
        selection['new'] = false;
    }

    if(plotStart){
        // Plot the launch path coordinates and place the ship at the launch origin
        plotPath();
        plotShip();

        // Move down the pipeline
        plotStart = false;
        zoomStart = true;
    }

    if(zoomStart){
        zoomIn();

        zoomStep--;

        if(zoomStep === 0){
            zoomStart = false;
            zoomStep = 300;

            pathStart = true;
            outStart = true;

            controls.autoRotate = true;
            controls.enabled = true;
        }
    }

    if(pathStart){
        // Stop drawing if all points are displayed
        if(path.geometry.getAttribute('position') && drawCount < MAX_POINTS){
            drawCount++;
            updateShip();
        }

        // Reset the ship rotation and position once finished
        if(path.geometry.getAttribute('position') && drawCount === MAX_POINTS){
            resetShip();
        }
    }

    if(outStart){
        zoomOut();

        outStep--;

        if(outStep === 0){
            outStart = false;
            outStep = 400;
        }
    }

    // Rotate the earth incrementally
    if(rotating){
        earthMesh.rotation.y += rotatingStep;
    }

    // Update the draw range with the incremeneted draw count
    path.geometry.setDrawRange(0, drawCount);
}

function plotPath(){
    // Stop rotation and camera controls during the plot and zoom in
    controls.autoRotate = false;
    rotating = false;
    controls.enabled = false;

    // Plot the launch path
    setPath(
        selection['origin'],
        selection['trajectory'],
        selection['orbit']
    );

    // camera.lookAt(new THREE.Vector3(
    //     zoom[selection['origin']]['camera']['x'],
    //     zoom[selection['origin']]['camera']['y'],
    //     zoom[selection['origin']]['camera']['z']
    // ));
}

function zoomIn(){
    // Set the camera movement variables at the start of the zoom
    if(zoomStep === 300){
        startX = camera.position.x;
        startY = camera.position.y;
        endX = zoom[selection['origin']]['x'];
        endY = zoom[selection['origin']]['y'];
        stepX = (endX - startX) / 300;
        stepY = (endY - startY) / 300;
        stepZ = (30 - camera.position.z) / 200;
    }

    // Tween direction from the globe to the launch origin in the first 100 frames
    if(zoomStep > 200){
        let zoomIn = zoom[selection['origin']]['camera']
        lookX = (zoomIn['x'] / 100) * Math.abs(300 - zoomStep);
        lookY = (zoomIn['y'] / 100) * Math.abs(300 - zoomStep);
        lookZ = (zoomIn['z'] / 100) * Math.abs(300 - zoomStep);
    }

    // Camera direction at globe or launch origin
    camera.lookAt(new THREE.Vector3(
        lookX,
        lookY,
        lookZ
    ));

    // Move the camera position one step
    camera.position.x += stepX;
    camera.position.y += stepY;

    // Zoom faster for a panoramic view
    if(zoomStep > 100){
        camera.position.z += stepZ;
    }
}

function zoomOut(){
    stepZ = 170 / 400;

    // Tween direction from the launch origin to the globe in the first 100 frames
    if(outStep > 300){
        let zoomOut = zoom[selection['origin']]['camera'];
        // let zoomOut = shipLight.position;
        lookX = zoomOut['x'] - (zoomOut['x'] / 100) * Math.abs(400 - outStep);
        lookY = zoomOut['y'] - (zoomOut['y'] / 100) * Math.abs(400 - outStep);
        lookZ = zoomOut['z'] - (zoomOut['z'] / 100) * Math.abs(400 - outStep);
    }

    // Camera direction at globe or launch origin
    camera.lookAt(new THREE.Vector3(
        lookX,
        lookY,
        lookZ
    ));

    // Zoom out one step
    camera.position.z += stepZ;
}

function plotShip(){
    // Rotate the ship plane to match the launch path plane
    let shipRot = pathRotations[selection['origin']][selection['trajectory']]
    shipContainer.rotation.set(
        -shipRot['x'],
        -shipRot['y'],
        -shipRot['z']
    );

    // Set the ship's initial position to the launch origin
    let positions = path.geometry.attributes.position.array
    shipLight.position.set(
        positions[0],
        positions[1],
        positions[2]
    );
}

function updateShip(){
    // Update the ship's position to the current launch path coordinate
    let positions = path.geometry.attributes.position.array
    shipLight.position.set(
        positions[drawCount * 3 - 3],
        positions[drawCount * 3 - 2],
        positions[drawCount * 3 - 1]
    );
}

function resetShip(){
    // Reset the ships position to the scene origin
    shipContainer.rotation.set(0, 0, 0);
    shipLight.position.set(0, 0, 0);
}

function resetState(){
    // Reset all state variables
    zoomStep = 300;
    outStep = 400;
    zoomStart = false;
    pathStart = false;
    outStart = false;
}
