let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

// Solicita a quantidade dos três produtos
const quantidade1 = parseInt(input());
const quantidade2 = parseInt(input());
const quantidade3 = parseInt(input());

// Solicita o preço dos três produtos
const preco1 = parseFloat(input());
const preco2 = parseFloat(input());
const preco3 = parseFloat(input());

// Solicita a quantidade de dinheiro disponível
const dinheiro = parseFloat(input());

// Calcula o custo total dos produtos
const custoTotal = (quantidade1 * preco1) + (quantidade2 * preco2) + (quantidade3 * preco3);

// Calcula o troco
const troco = dinheiro - custoTotal;

// Formata o troco para duas casas decimais
const trocoFormatado = troco.toFixed(2);

// Exibe o troco
console.log(trocoFormatado);
