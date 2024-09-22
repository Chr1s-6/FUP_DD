let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

function organizarfila() {
    let n = +input();

    if (n === 0) {
        write(`[ ]`);
        write(`[ ]`);
        return;
    }
    let vetor:number[] = input().split(" ").map(Number);

    let a :number[] = [];
    let s :number[] = [];

    for(let num of vetor){
        if(num % 2 == 0){
            s.push(num);
        } else {
            a.push(num);
        }
    }
    const alunosSaida = a.length > 0 ? `[ ${a.join(' ')} ]` : `[ ]`;
    const servidoresSaida = s.length > 0 ? `[ ${s.join(' ')} ]` : `[ ]`;

    write(`${alunosSaida}\n${servidoresSaida}`);
}
organizarfila();
