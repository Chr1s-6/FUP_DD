let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

// Solicita o tempo em segundos ao usuário
const tempoEmSegundos = parseInt(input());

// Calcula horas, minutos e segundos
const horas = Math.floor(tempoEmSegundos / 3600);
const minutos = Math.floor((tempoEmSegundos % 3600) / 60);
const segundos = tempoEmSegundos % 60;

// Formata a saída
const tempoFormatado = `${horas}:${minutos}:${segundos}`;

// Exibe o tempo formatado e pula uma linha
console.log(tempoFormatado);
