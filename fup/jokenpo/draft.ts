let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

function definir_vencendor(jogador1: string, jogador2: string){
    if(jogador1 === jogador2){
      return "empate";
    }
    if(jogador1 === "S" && jogador2 === "P" || jogador1 === "P" && jogador2 === "R" || jogador1 === "R" && jogador2 === "S"){
      return "jog1";
    }
    if(jogador1 === "P" && jogador2 === "S" || jogador1 === "R" && jogador2 === "P" || jogador1 === "S" && jogador2 === "R"){
      return "jog2";
    }
    
} 

let jogador1: string = input();
let jogador2: string = input();

let result = definir_vencendor(jogador1, jogador2);

console.log(result);
 

