let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let n1 = +input();
let n2 = +input();

function calcular_media(n1, n2): number{
    let media = (n1 + n2) / 2;
    return media;

}
let result = calcular_media(n1, n2);

console.log(" O resultado eh " + result.toFixed(2));

