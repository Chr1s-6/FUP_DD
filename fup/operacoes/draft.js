let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);


let a = +input();
let b = +input();
let soma = (a + b);
let subtração = (a - b);
let multiplicação = (a * b);
let divisão = (a / b);
let resto = a % b;

console.log(soma);
console.log(subtração);
console.log(multiplicação);
console.log(divisão.toFixed(2));
console.log(resto);