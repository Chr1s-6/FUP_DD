let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);


var n = parseFloat(input());
var tipo = input();

if(tipo == "c"){
    console.log(ceil(flot(n)));
} else if(tipo == "f"){
    console.log(floor(float(n)));
} else if(tipo == "r"){
    console.log(round(float(n)));
} else{
    console.log("denovo sena");
}