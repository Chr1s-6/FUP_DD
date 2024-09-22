let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let numero = +input();

for(let i = 1; i <= numero; i += 2){
  write(i);
}
for (let i = numero - (numero % 2); i >= 0; i -= 2) {
  console.log(i)
}