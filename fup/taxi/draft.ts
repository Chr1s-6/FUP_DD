let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

function escolhercomb(precoAlc,precoGaso,rendeAlc,rendeGaso){
    let custoAlcP_Km = precoAlc / rendeAlc;
    let custoGasoP_Km = precoGaso / rendeGaso;

    if(custoAlcP_Km > custoGasoP_Km){
        return "G";
    } else {
        return "A"
    }
}

let a = +input();
let b = +input();
let c = +input();
let d = +input();

let result = escolhercomb(a,b,c,d);
write(result);