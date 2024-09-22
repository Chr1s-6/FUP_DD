let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};




let idadedomenor: number = +input();
let quantidade: number = +input();
let contador: number = 0;
let idadeatual: number = idadedomenor;

while(contador < quantidade){
   console.log(idadeatual)
   idadeatual = idadeatual + 2;
   contador += 1;
}