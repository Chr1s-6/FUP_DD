let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

function lerimprimirvetor() {
    let nElementos = parseInt(input());
    let vetor: number[] = [];

    if (nElementos > 0){
        let elementos = input().trim().split(' ');

    for (let i = 0; i < nElementos; i++) {
        vetor.push(parseInt(elementos[i]));
    }

    }
    
    if (vetor.length === 0) {
        console.log('[ ]');
    } else {
        console.log(`[ ${vetor.join(' ')} ]`);
    }
}


lerimprimirvetor();
