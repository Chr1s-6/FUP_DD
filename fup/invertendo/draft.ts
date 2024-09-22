let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

function vetinvert(): number[] {
    let n = +input();
    let vetor: number[] = input().split(' ').map(Number);

    let vetorInvert: number[] = [];

    for(let i = n - 1 ; i >= 0; i--){
        vetorInvert.push(vetor[i]);
    }
    return vetorInvert;
}


let result = vetinvert();
write(`[ ${result.join(' ')} ]`);
