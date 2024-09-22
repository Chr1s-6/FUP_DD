let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);


let n1 = +input();
let n2 = +input();
let simbolo = input();

if(simbolo === "+"){
    console.log(n1 + n2);
}else if(simbolo === "-"){
    console.log(n1 - n2);
}else if(simbolo === "*"){
    console.log(n1 * n2);
}else if(simbolo === "/"){
    console.log(n1 / n2);
}


