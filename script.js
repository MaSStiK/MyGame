document.onkeydown = checkButton;

let cube = {
    x: 0,
    y: 0,
    id: "cube",
    width: 56,
    height: 56,
    trn: .25,
    step: 100,
    color: 'black'
}

let map = {
    width: 750,
    height: 750
}

function checkButton(event) {

    if (event.keyCode === 38) {
        // ArrowUp: 38
        if (cube.y - cube.step > 0) {
            cube.y -= cube.step;
        }

        else {
            cube.y = 0;
        }
    }

    if (event.keyCode === 40) {
        // ArrowDown 40
        if (cube.y + cube.step < map.width) {
            cube.y += cube.step;
        }

        else {
            cube.y = map.width;
        }
    }

    if (event.keyCode === 37) {
        // ArrowLeft: 37
        if (cube.x - cube.step > 0) {
            cube.x -= cube.step;
        }

        else {
            cube.x = 0;
        }
    }

    if (event.keyCode === 39) {
        // ArrowRight: 39
        if (cube.x + cube.step <= map.height) {
            cube.x += cube.step;
        }

        else {
            cube.x = map.height;
        }
    }
    
    render(cube);
}

function render(cube) {
    document.getElementById(cube.id).style.top = cube.y + 'px';
    document.getElementById(cube.id).style.left = cube.x + 'px';
    document.getElementById(cube.id).style.transition = 'ease ' +  cube.trn + 's';
    document.getElementById(cube.id).style.width = cube.width + 'px';
    document.getElementById(cube.id).style.height = cube.height + 'px';
    document.getElementById(cube.id).style.backgroundColor = cube.color;

    console.log("x,y = " + cube.x + "|" + cube.y)
}

render(cube); //Рендер при запуске