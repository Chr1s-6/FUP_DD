let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);


function calcularArea(comprimento, largura) {
    return comprimento * largura;
}

const comprimento1 = parseInt(input());
const largura1 = parseInt(input());

const comprimento2 = parseInt(input());
const largura2 = parseInt(input());

const area1 = calcularArea(comprimento1, largura1);
const area2 = calcularArea(comprimento2, largura2);

const maiorArea = Math.max(area1, area2);

console.log(maiorArea);