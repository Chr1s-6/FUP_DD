let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let [NumA, NumB] = input().split(' ').map(Number);


let resultado: number[] = [];
for (let i = NumA; i < NumB; i++){
    resultado.push(i);
}

write(`[ ${resultado.join(' ')} ]`);
