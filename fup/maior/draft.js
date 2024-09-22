let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);


var chutePrimeiro = parseFloat(input());
var escolhaSegundo = input().trim();
var valorReal = parseFloat(input());

if (chutePrimeiro === valorReal) {
    console.log("primeiro");
} else if ((escolhaSegundo === 'm' && valorReal > chutePrimeiro)){
    console.log("primeiro");
}else if((escolhaSegundo === 'M' && valorReal < chutePrimeiro)){
    console.log("primeiro");
}else {
    console.log("segundo");
}