let cube = {
    // x: randomChoice([100, 514]), // Случ. угол
    // y: randomChoice([100, 514]),
    // x: randomInteger(100,514), // Случ. место на карте
    // y: randomInteger(100,514),
    x: 300,
    y: 300,
    id: 'cube',
    width: 56,
    height: 56,
    trn: .25,
    step: 56,
    color: 'black'
}

let map = {
    x: 0,
    y: 0,
    width: window.innerWidth,
    height: window.innerHeight,
    color: '#f5f5f5'
}

let bots = [];

let bot = {
    x: 200,
    y: 200,
    id: 1,
    width: 56,
    height: 56,
    trn: .25,
    step: 56,
    color: 'red'
}

bots.push(bot);



renderMap(map); // Рендер карты
renderCube(spawnCube(map, cube)); // Рендер куба
renderBots(bots);