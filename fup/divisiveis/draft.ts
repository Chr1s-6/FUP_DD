let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

function divisiv(a ,b ){
    let divp3 = (a % 3 == 0) && (b % 3 == 0);
    let divp5 = (a % 5 == 0) && (b % 5 == 0);
    if ( divp3 || divp5){
        return "sim";
    } else {
        return "nao"
    }
}

let n1 = +input();
let n2 = +input();

let result = divisiv(n1,n2);
write(result)