let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let capacidade = +input();

let passageiros: number = 0;

  while(passageiros <= 2 * capacidade) {
    let movimentacao = +input();
    passageiros += movimentacao;
    
    if (passageiros <= 0) {
      console.log("vazio");
    } else if (passageiros >= 2 * capacidade) {
      console.log("hora de partir");
      break;
    } else if (passageiros >= capacidade) {
      console.log("lotado");
    } else {
      console.log("ainda cabe");
    }
  }


