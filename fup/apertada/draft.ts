let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = (p0: string) : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

function menorvalor(){
    let menor: number = 31; 
    for (let i = 0; i < 5; i++) {
        let valor = parseInt(input(` ${i + 1}:`));
        if (valor < menor) {
            menor = valor; 
        }
    }

    return menor; 
}

// Chama a função e imprime o resultado
const menorValor = menorvalor();
console.log(menorValor);

