let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);


let valorTV = +input();
let parcelas = +input();

let tabelaDeJuros = {
    1: 0,
    2: 0.05,
    3: 0.10,
    4: 0.15,
    5: 0.20,
    6: 0.25,
    7: 0.30,
    8: 0.35,
    9: 0.40,
    10: 0.45
};

let taxaDeJuros = tabelaDeJuros[parcelas];

let valorTotal = (valorTV * taxaDeJuros) + valorTV;
let valorParcela = valorTotal / parcelas;

console.log(valorParcela.toFixed(2));
console.log(valorTotal.toFixed(2));