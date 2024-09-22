let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let p = +input();
let s = +input();
let e = +input();

let a = 0;
let salto: string[] = [];
while (a < p){

  let aterrisar = a + s;
  if(aterrisar >= p){
    salto.push(`${a} saiu`);
     break;
  }
  salto.push(`${a} ${aterrisar}`)
  a = aterrisar - e;
}

for(let salt of salto){
  write(salt);
}