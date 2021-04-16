let cube = {
    x: randomChoice([100,514]), // Случ. корды спавна
    y: randomChoice([100,514]),
    id: "cube",
    width: 56,
    height: 56,
    trn: .25,
    step: 56,
    color: 'black'
}

let map = {
    x: 100,
    y: 100,
    width: 470,
    height: 470,
    color: '#f5f5f5'
}

renderMap(map); // Рендер карты
renderCube(cube); // Рендер куба