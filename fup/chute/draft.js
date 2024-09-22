let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);


const valorProduto = parseInt(input());
const chutePrimeiro = parseInt(input());
const chuteSegundo = parseInt(input());

const distanciaPrimeiro = Math.abs(valorProduto - chutePrimeiro);
const distanciaSegundo = Math.abs(valorProduto - chuteSegundo);

if (distanciaPrimeiro < distanciaSegundo) {
    console.log("primeiro");
} else if (distanciaSegundo < distanciaPrimeiro) {
    console.log("segundo");
} else {
    console.log("empate");
}