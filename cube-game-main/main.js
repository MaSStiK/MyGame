let map = {
    x: 0,
    y: 0,
    // width: window.innerWidth,
    // height: window.innerHeight,
    width: 720,
    height: 560,
    color: '#f5f5f5'
}

let cube = {
    x: 0,
    y: 0,
    id: 'cube',
    width: 56,
    height: 56,
    trn: .25,
    step: 56,
    color: 'black',
    oldX: 0,
    oldY: 0
}

let bots = [];

let bot = {
    x: 0,
    y: 0,
    id: 1,
    width: 56,
    height: 56,
    trn: .25,
    step: 56,
    color: 'red'
}

// bots.push(spawnCube(map, bot));

let buffs = [];

let buff = {
    x: 0,
    y: 0,
    id: 1,
    width: 56,
    height: 56,
    trn: .25,
    step: 56,
    color: 'yellow'
}

// buffs.push(spawnCube(map, buff));

renderMap(map);
renderCube(spawnCube(map, cube));
// renderBots(bots);
// renderBuffs(buffs);

let score = 0;

let tike = setInterval(timeTike, 3000);
