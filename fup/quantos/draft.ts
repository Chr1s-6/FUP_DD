let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

function contarValoresIguais(a: number, b: number, c: number): number {
    // Inicializa o contador de valores iguais
    let iguais = 0;

    // Verifica quantos valores são iguais
    if (a === b && b === c) {
        iguais = 3; // Todos os valores são iguais
    } else if (a === b || b === c || a === c) {
        iguais = 2; // Dois valores são iguais
    } else {
        iguais = 0; // Nenhum valor é igual
    }

    return iguais;
}


let j1 = +input();
let j2 = +input();
let j3 = +input();

let iguais = contarValoresIguais(j1, j2, j3);

console.log(iguais);
