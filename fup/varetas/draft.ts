let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

function verificarTriangulo(a, b, c) {
    if (a + b > c && a + c > b && b + c > a) {
        console.log("True");
    } else {
        console.log("False");
    }
  }
  
    const a = parseFloat(input());
    const b = parseFloat(input());
    const c = parseFloat(input());
  
    verificarTriangulo(a, b, c);   
