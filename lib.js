document.onkeydown = checkButton;

function checkButton(event) {

    if (event.keyCode === 38) {
        // ArrowUp: 38
        if (cube.y - cube.step > map.y) {
            cube.y -= cube.step;
        }

        else {
            cube.y = map.y;
        }
    }

    if (event.keyCode === 40) {
        // ArrowDown 40
        if (cube.y + cube.height + cube.step < map.height + map.y) {
            cube.y += cube.step;
        }

        else {
            cube.y = map.height + map.y - cube.height;
        }
    }

    if (event.keyCode === 37) {
        // ArrowLeft: 37
        if (cube.x - cube.step > map.x) {
            cube.x -= cube.step;
        }

        else {
            cube.x = map.x;
        }
    }

    if (event.keyCode === 39) {
        // ArrowRight: 39
        if (cube.x + cube.width + cube.step < map.width + map.x) {
            cube.x += cube.step;
        }

        else {
            cube.x = map.width + map.x - cube.width;
        }
    }
    
    Render(cube); // Рендер куба каждый сдвиг
}

function renderMap(map) {
    document.getElementById('map').style.top = map.y + 'px';
    document.getElementById('map').style.left = map.x + 'px';
    document.getElementById('map').style.width = map.width + 'px';
    document.getElementById('map').style.height = map.height + 'px';
    document.getElementById('map').style.backgroundColor = map.color;
}

function Spawn(stuff) { // Спавн любого обьекта
    stuff.forEach(element => {
        let div = document.createElement('div');
        div.id = element.id;
        div.className = element.class;
        document.body.append(div);
        Render(element);
    });
}

function Render(stuff) { // Рендер любого обьекта
    document.getElementById(stuff.id).style.top = stuff.y + 'px';
    document.getElementById(stuff.id).style.left = stuff.x + 'px';
    document.getElementById(stuff.id).style.transition = 'ease ' +  stuff.trn + 's';
    document.getElementById(stuff.id).style.width = stuff.width + 'px';
    document.getElementById(stuff.id).style.height = stuff.height + 'px';
    document.getElementById(stuff.id).style.backgroundColor = stuff.color;
}

// function ReachBuff() {
//     if 
// }

// function timeTick() {
//     //console.log(new Date().getSeconds());
//     renderBuffs(buffs);
// }


function randomChoice(items) { // Случайный выбор из массива
    return items[Math.floor(Math.random() * items.length)];
}

function randomInteger(min, max) { // Случайное число из диапазона
    return Math.floor(min + Math.random() * (max + 1 - min));
}