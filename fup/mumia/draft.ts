let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let n = input();
let i = +input();

    if(i < 12){
        write (n + " eh crianca");
    } else if(i < 18){
        write (n + " eh jovem");
    } else if(i < 65){
        write (n + " eh adulto");
    } else if(i < 1000){
        write (n + " eh idoso")
    } else {
        write (n + " eh mumia")
    }

