let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);


function verificarStatus(wifi, login, admin) {
    if (!wifi) {
        console.log("you must connect to wifi");
    } else if (!login) {
        console.log("you need to login first");
    } else if (!admin) {
        console.log("you must to login as admin");
    } else {
        console.log("done");
    }
}

const wifi = parseInt(input());
const login = parseInt(input());
const admin = parseInt(input());

verificarStatus(wifi, login, admin);