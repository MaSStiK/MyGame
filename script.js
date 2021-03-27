document.onkeydown = checkButton;
let cube = {
    x: 0,
    y: 0,
    id: "main",
    speed: 100
}

function checkButton(e) {
    let k = e || window.event;

    //console.log(k);

    if (k.keyCode === 38) {
        // ArrowUp: 38
        if (cube.y > 0) {
            cube.y = cube.y - cube.speed;
        }
        console.log("ArrowUp");
    }

    else if (k.keyCode === 40) {
        // ArrowDown 40

        if (cube.y < 900) {
            cube.y = cube.y + cube.speed;
        }
        console.log("ArrowDown");
    }

    else if (k.keyCode === 37) {
        // ArrowLeft: 37
        if (cube.x > 0) {
            cube.x = cube.x - cube.speed;
        }
        console.log("ArrowLeft");
    }

    else if (k.keyCode === 39) {
        // ArrowRight: 39
        if (cube.x < 1800) {
            cube.x = cube.x + cube.speed;
        }
        console.log("ArrowRight");
    }
    render(cube.id, cube.x, cube.y);
}

function render(id, x, y) {
    document.getElementById(id).style.top = y + 'px';
    document.getElementById(id).style.left = x + 'px';
    document.getElementById(id).style.transition = 'cubic-bezier(.77,.14,.19,.85) .25s';
}

