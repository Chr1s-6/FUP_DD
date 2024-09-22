let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let n1 = +input();
let n2 = +input();

function calcular_media(n1, n2): number{
    let media = (n1 + n2) / 2;
    return media;
  
}
let result = calcular_media(n1, n2);

console.log(" O resultado eh " + result.toFixed(2));
