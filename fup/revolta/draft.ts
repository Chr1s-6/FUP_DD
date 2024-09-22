let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

function forca():string {
    let n = +input();
    let vetor: number[] = [];

    for (let i = 0; i < n; i++) {
        vetor.push(+input());
    }
    let soldados = 0;
    let rebeldes = 0;

    for (let num of vetor) {
        if (num % 2 === 0) {
            rebeldes += num;
        } else {
            soldados += num;
        }
    }

    if (soldados > rebeldes) {
        return "soldados";
    } else if (rebeldes > soldados) {
        return "rebeldes";
    } else {
        return "empate";
    }
}

let result = forca();
write(result);