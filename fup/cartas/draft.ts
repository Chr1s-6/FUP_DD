let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};


function pegar_nome(valor: number): string{
  if (valor == 1) {return "A";}
  if (valor == 11) {return "J";}
  if (valor == 12) {return "Q";}
  if (valor == 13) {return "K";}
  return String(valor);
}

function principal(){
let quantidade: number = +input();
let valores: number[] = [];
 if(quantidade = 0){
   console.log("[ ]")
   return;
 }
  
  let saida = valores = input().split(" ").map(x => +x).map(pegar_nome)
 
}
