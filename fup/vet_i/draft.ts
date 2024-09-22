let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

function lerimprimirvetor(){
    let numElementos = parseInt(input());
    let vetor : number [] = [];

    for (let i = 0; i < numElementos; i++) {
        const elemento = parseInt(input());
        vetor.push(elemento);
    }
    console.log(vetor.join("\n"));
}
lerimprimirvetor();
