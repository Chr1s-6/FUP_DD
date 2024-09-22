let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};


let quantidade1 = parseInt(input());
let quantidade2 = parseInt(input());
let quantidade3 = parseInt(input());


let preco1 = parseFloat(input());
let preco2 = parseFloat(input());
let preco3 = parseFloat(input());


const dinheiro = parseFloat(input());


function custoTotal((quantidade1 * preco1) + (quantidade2 * preco2) + (quantidade3 * preco3)){
  
}

// Calcula o troco
const troco = dinheiro - custoTotal;

// Formata o troco para duas casas decimais
const trocoFormatado = troco.toFixed(2);

// Exibe o troco
console.log(trocoFormatado);

