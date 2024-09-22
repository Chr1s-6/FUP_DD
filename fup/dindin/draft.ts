let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let quant = +input();
let chocolate = 0;
let limao = 0;
let manha = 0;
let tarde = 0;

for(let i = 0; i < quant; i++){
  let lista = input().split(" ");
  let sabor = lista[0];
  let turno = lista[1];
  

  if(sabor == "c"){
    chocolate++;
  } else {
    limao++;
  } 
  if(turno == "m"){
    manha++;
  } else {
    tarde++;
  }
}

if(chocolate > limao){
  write("c");
} else if(limao == chocolate){
  write("empate");
} else {
  write("l")
}

if(manha > tarde){
  write("t");
} else if(tarde == manha){
  write("empate");
} else {
  write("m");
}