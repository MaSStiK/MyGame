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
    
    renderCube(cube); // Рендер куба каждый сдвиг
}

function renderCube(cube) {
    document.getElementById(cube.id).style.top = cube.y + 'px';
    document.getElementById(cube.id).style.left = cube.x + 'px';
    document.getElementById(cube.id).style.transition = 'ease ' +  cube.trn + 's';
    document.getElementById(cube.id).style.width = cube.width + 'px';
    document.getElementById(cube.id).style.height = cube.height + 'px';
    document.getElementById(cube.id).style.backgroundColor = cube.color;

    // Вывод координат (В.Л - верхний левый угол / Н.П - нижний правый угол)
    console.log("(В.Л) x,y = " + cube.x + "/" + cube.y + " | " + "(Н.П) x,y = " + (cube.x + cube.step) + "/" + (cube.y + cube.step))
}

function renderMap(map) {
    document.getElementById('map').style.top = map.y + 'px';
    document.getElementById('map').style.left = map.x + 'px';
    document.getElementById('map').style.width = map.width + 'px';
    document.getElementById('map').style.height = map.height + 'px';
    document.getElementById('map').style.backgroundColor = map.color;
}

function spawnCube(map, cube) {
    // let mapMinX = map.x;
    // let mapMaxX = map.x + map.width - cube.width;
    // let mapMinY = map.y;
    // let mapMaxY = map.y + map.height - cube.height;
    // cube.x = Math.round(Math.random() * (mapMaxX - mapMinX) + mapMinX); // Старый способ
    // cube.y = Math.round(Math.random() * (mapMaxY - mapMinY) + mapMinY);

    cube.x = randomInteger(map.x, map.x + map.width - cube.width);
    cube.y = randomInteger(map.y, map.y + map.height - cube.height);
    return cube;
}

function spawnBot(map, bot) {
    bot.x = randomInteger(map.x, map.x + map.width - bot.width);
    bot.y = randomInteger(map.y, map.y + map.height - bot.height);
    return bot;
}

function renderBots(bots) {
    let i = 1;
    bots.map(bot => {
        let div = document.createElement('div');
        bot.id = i;
        div.id = i;
        div.className = 'bot';
        console.log(div);
        document.body.append(div);
        renderBot(spawnBot(map, bot));

        i++;
    });
    
}

function renderBot(bot) {
    document.getElementById(bot.id).style.top = bot.y + 'px';
    document.getElementById(bot.id).style.left = bot.x + 'px';
    document.getElementById(bot.id).style.transition = 'ease ' +  bot.trn + 's';
    document.getElementById(bot.id).style.width = bot.width + 'px';
    document.getElementById(bot.id).style.height = bot.height + 'px';
    document.getElementById(bot.id).style.backgroundColor = bot.color;
}

function randomChoice(items) { // Случайный выбор из массива
    return items[Math.floor(Math.random() * items.length)];
}

function randomInteger(min, max) { // Случайное число из диапазона
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}