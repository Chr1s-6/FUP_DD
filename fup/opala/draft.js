let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);


let vkm = +input();
let tempoM = +input();
let consumoL = +input();

let tempoH = tempoM / 60;
let distancia = vkm * tempoH;
let desenpenho = distancia / consumoL;

console.log(desenpenho.toFixed(2));