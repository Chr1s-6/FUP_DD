let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};


let dia: number = +input();

let Totalconsumo: number = 0;
for(let i = 0; i <= dia; i++){
   let consumo = +input();
    Totalconsumo += consumo;

}
let media = Totalconsumo / dia ;
console.log(media.toFixed(1))