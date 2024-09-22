let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

function vencedor(a , b , c){

    if (a == b && b == c){
        return "empate";
    }

    let totalImpar = (a % 2 === 1 ? 1 : 0) + (b % 2 === 1 ? 1 : 0) + (c % 2 === 1 ? 1 : 0);
    let totalPar = (a % 2 === 0 ? 1 : 0) + (b % 2 === 0 ? 1 : 0) + (c % 2 === 0 ? 1 : 0);

    if (totalImpar === 1){
        if(a % 2 === 1) return "jog1";
        if(b % 2 === 1) return "jog2";
        if(c % 2 === 1) return "jog3";
    } else {
        if (totalPar === 1){
            if(a % 2 === 0) return "jog1";
            if(b % 2 === 0) return "jog2";
            if(c % 2 === 0) return "jog3";
        }
       
    }
    return "empate";
}

let jg1 = +input();
let jg2 = +input();
let jg3 = +input();

let result = vencedor(jg1,jg2,jg3)
write(result)