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
    width: 900,
    height: 950
}

function checkButton(event) {

    if (event.keyCode === 38) {
        // ArrowUp: 38
        if (cube.y > 0) {
            cube.y -= cube.step;
        }
    }

    if (event.keyCode === 40) {
        // ArrowDown 40
        if (cube.y < map.width) {
            cube.y += cube.step;
        }
    }

    if (event.keyCode === 37) {
        // ArrowLeft: 37
        if (cube.x > 0) {
            cube.x -= cube.step;
        }
    }

    if (event.keyCode === 39) {
        // ArrowRight: 39
        if (cube.x < map.height) {
            cube.x += cube.step;
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
}

render(cube); //Рендер при запуске