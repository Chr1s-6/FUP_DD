let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);


const n1 = parseFloat(input());
const n2 = parseFloat(input());

if(n1-n2>0){
    console.log(n1);
} else{
    console.log(n2);
}