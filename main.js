let cube = {
    x: 0,
    y: 0,
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
    x: 0,
    y: 0,
    id: 1,
    width: 56,
    height: 56,
    trn: .25,
    step: 56,
    color: 'red'
}

for (let i = randomInteger(2,4); i != 0; i--) {
    bots.push(bot);
}

let buffs = [];

let buff = {
    x: 0,
    y: 0,
    id: 'buff',
    width: 56,
    height: 56,
    trn: .25,
    step: 56,
    color: 'yellow'
}

buffs.push(buff);

renderMap(map); // Рендер карты
renderCube(spawnCube(map, cube)); // Рендер куба
renderBots(bots);
// renderBuffs(buffs);

let time = setInterval(timeTick, 1000);