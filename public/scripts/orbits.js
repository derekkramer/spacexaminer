// Set the origins of all launch paths
const pathRotations = {
    'florida': [
        {
            'x': 1.05,
            'y': 1.4,
            'z': 0.58
        },
        {
            'x': 2.38,
            'y': 2,
            'z': 1.93
        },
        {
            'x': 2.13,
            'y': 2.6,
            'z': 1.74
        }
    ],
    'vandenberg': [
        {
            'x': 0.68,
            'y': 1.98,
            'z': 0
        },
        {
            'x': 2.2,
            'y': 3,
            'z': 1.15
        },
        {
            'x': -1.27,
            'y': -15,
            'z': -1.01
        }
    ]
}

let MAX_POINTS,
    positions,
    pos,
    step,
    r = 30,
    index,
    x,
    y,
    z,
    takeoff;

// Set the position coordinates of the launch path
function setPositions(orbit) {
    if(orbit === 'leo'){
        MAX_POINTS = 1000;
        positions = new Float32Array(MAX_POINTS * 3);

        if(path.geometry.getAttribute('position')){
            path.geometry.removeAttribute('position');
        }

        path.geometry.addAttribute('position', new THREE.BufferAttribute(positions, 3));

        pos = path.geometry.attributes.position.array;
        step = (2 * Math.PI) / (MAX_POINTS / 2);
        index = 0;
        takeoff = MAX_POINTS / 10;

        for (let theta = 0; theta < 2 * Math.PI; theta += step) {

            let newTheta = Math.abs(2 * Math.PI - theta),
                modifier = 1;

            if (theta < takeoff * step) {
                modifier = (Math.sqrt(theta) / Math.sqrt(takeoff * step)) * 0.2 + 0.8;
            }

            x = r * Math.cos(newTheta) * modifier;
            y = 0;
            z = r * Math.sin(newTheta) * modifier;

            pos[index++] = x;
            pos[index++] = y;
            pos[index++] = z;
        }

        for (let theta = 0; theta < 2 * Math.PI; theta += step) {

            let newTheta = Math.abs(2 * Math.PI - theta);

            x = r * Math.cos(newTheta);
            y = 0;
            z = r * Math.sin(newTheta);

            pos[index++] = x;
            pos[index++] = y;
            pos[index++] = z;
        }
    }else if(orbit === 'meo'){
        MAX_POINTS = 2000;
        positions = new Float32Array(MAX_POINTS * 3);

        if(path.geometry.getAttribute('position')){
            path.geometry.removeAttribute('position');
        }

        path.geometry.addAttribute('position', new THREE.BufferAttribute(positions, 3));

        pos = path.geometry.attributes.position.array;
        step = (2 * Math.PI) / (MAX_POINTS / 4);
        index = 0;
        takeoff = MAX_POINTS / 10;

        for (let theta = 0; theta < 2 * Math.PI; theta += step) {

            let newTheta = Math.abs(2 * Math.PI - theta),
                modifier = 1;

            if (theta < takeoff * step) {
                modifier = (Math.sqrt(theta) / Math.sqrt(takeoff * step)) * 0.2 + 0.8;
            }

            x = r * Math.cos(newTheta) * modifier;
            y = 0;
            z = r * Math.sin(newTheta) * modifier;

            pos[index++] = x;
            pos[index++] = y;
            pos[index++] = z;
        }

        for (let theta = 0; theta < 2 * Math.PI; theta += step) {

            let newTheta = Math.abs(2 * Math.PI - theta);

            x = r * Math.cos(newTheta);
            y = 0;
            z = r * Math.sin(newTheta);

            pos[index++] = x;
            pos[index++] = y;
            pos[index++] = z;
        }

        for (let theta = 0; theta < 2 * Math.PI; theta += step) {

            let newTheta = Math.abs(2 * Math.PI - theta);
            let ellipseModifier = 1;

            if(theta > 1.5 * Math.PI){
                ellipseModifier = 1.5;
            }

            x = r * ellipseModifier * Math.cos(newTheta);
            y = 0;
            z = r * 1.5 * Math.sin(newTheta);

            pos[index++] = x;
            pos[index++] = y;
            pos[index++] = z;
        }

        for (let theta = 0; theta < 2 * Math.PI; theta += step) {

            let newTheta = Math.abs(2 * Math.PI - theta);

            x = r * 1.5 * Math.cos(newTheta);
            y = 0;
            z = r * 1.5 * Math.sin(newTheta);

            pos[index++] = x;
            pos[index++] = y;
            pos[index++] = z;
        }
    }else if(orbit === 'heo'){
        MAX_POINTS = 2000;
        positions = new Float32Array(MAX_POINTS * 3);

        if(path.geometry.getAttribute('position')){
            path.geometry.removeAttribute('position');
        }

        path.geometry.addAttribute('position', new THREE.BufferAttribute(positions, 3));

        pos = path.geometry.attributes.position.array;
        step = (2 * Math.PI) / (MAX_POINTS / 4);
        index = 0;
        takeoff = MAX_POINTS / 10;

        for (let theta = 0; theta < 2 * Math.PI; theta += step) {

            let newTheta = Math.abs(2 * Math.PI - theta),
                modifier = 1;

            if (theta < takeoff * step) {
                modifier = (Math.sqrt(theta) / Math.sqrt(takeoff * step)) * 0.2 + 0.8;
            }

            x = r * Math.cos(newTheta) * modifier;
            y = 0;
            z = r * Math.sin(newTheta) * modifier;

            pos[index++] = x;
            pos[index++] = y;
            pos[index++] = z;
        }

        for (let theta = 0; theta < 2 * Math.PI; theta += step) {

            let newTheta = Math.abs(2 * Math.PI - theta);

            x = r * Math.cos(newTheta);
            y = 0;
            z = r * Math.sin(newTheta);

            pos[index++] = x;
            pos[index++] = y;
            pos[index++] = z;
        }

        for (let theta = 0; theta < 2 * Math.PI; theta += step) {

            let newTheta = Math.abs(2 * Math.PI - theta);
            let ellipseModifier = 1;

            if(theta > 1.5 * Math.PI){
                ellipseModifier = 2;
            }

            x = r * ellipseModifier * Math.cos(newTheta);
            y = 0;
            z = r * 2 * Math.sin(newTheta);

            pos[index++] = x;
            pos[index++] = y;
            pos[index++] = z;
        }

        for (let theta = 0; theta < 2 * Math.PI; theta += step) {

            let newTheta = Math.abs(2 * Math.PI - theta);

            x = r * 2 * Math.cos(newTheta);
            y = 0;
            z = r * 2 * Math.sin(newTheta);

            pos[index++] = x;
            pos[index++] = y;
            pos[index++] = z;
        }
    }
}

function setDirection(origin, trajectory){
    path.rotation.x -= pathRotations[origin][trajectory]['x'];
    path.rotation.y -= pathRotations[origin][trajectory]['y'];
    path.rotation.z -= pathRotations[origin][trajectory]['z'];
}

function setPath(origin, trajectory, orbit){
    resetPath();
    setPositions(orbit);
    setDirection(origin, trajectory);
}

function resetPath(){
    drawCount = 0;
    path.rotation.set(0, 0, 0);
}
