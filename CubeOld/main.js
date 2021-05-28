let map = {
    x: 0,
    y: 0,
    width: window.innerWidth,
    height: window.innerHeight,
    color: '#f5f5f5'
}

toSpawn = []; // Массив для спавна всего

let cube = {
    x: RandomInteger(map.x, map.x + map.width - 56),
    y: RandomInteger(map.y, map.y + map.height - 56),
    id: 'cube',
    class: 'cube',
    width: 56,
    height: 56,
    trn: .25,
    step: 56,
    color: 'black'
}
toSpawn.push(cube);

for (let i = RandomInteger(2,4); i != 0; i--) {
    let bot = {
        x: RandomInteger(map.x, map.x + map.width - 56),
        y: RandomInteger(map.y, map.y + map.height - 56),
        id: 'bot_' + i,
        class: 'bot',
        width: 56,
        height: 56,
        trn: .25,
        step: 56,
        color: 'red'
    }   
    toSpawn.push(bot);
}

let buff = {
    x: RandomInteger(map.x, map.x + map.width - 56),
    y: RandomInteger(map.y, map.y + map.height - 56),
    id: 'buff',
    class: 'buff',
    width: 56,
    height: 56,
    trn: .25,
    step: 56,
    color: 'green'
}
toSpawn.push(buff);
console.log(toSpawn);

RenderMap(map); // Рендер карты
// renderCube(spawnCube(map, cube)); // Рендер куба
// renderBots(bots);
// // renderBuffs(buffs);

// let time = setInterval(timeTick, 1000);
Spawn(toSpawn);