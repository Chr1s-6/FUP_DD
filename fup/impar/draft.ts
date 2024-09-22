let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

function calcular_vencedor(n1: number, n2: number, n3: number): number{
  let soma = n2 + n3;
  let somaPar = soma % 2 == 0;

  if (n1 == 0){
    return somaPar ? 0 : 1; // Alice ganha se a soma for par, senão Bob ganha
    } else {
        // Bob gritou "par"
        return somaPar ? 1 : 0; // Bob ganha se a soma for par, senão Alice ganha
    }
  
}

let P = +input();
let A = +input();
let B = +input();

let resultado = calcular_vencedor(P, A, B);
console.log(resultado)