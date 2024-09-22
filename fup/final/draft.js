let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);


function calcularMedia(nota1, nota2) {
    return (nota1 + nota2) / 2;
}

var media = calcularMedia(parseFloat(input()),parseFloat(input()));
if (media >= 7) {
    console.log("aprovado");
} else if (media < 4) {
    console.log("reprovado");
} else {
    const final = parseFloat(input());
    const mediaFinal = calcularMedia(media, final); 
    if (mediaFinal >= 5) {
        console.log("aprovado na final");
    } else {
        console.log("reprovado na final");
    }
}