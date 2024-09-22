let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let c = +input();
let banana = +input();
let goiaba = +input();
let manga = +input();

let quan = (banana + goiaba + manga)/c;
write(Math.ceil(quan));
