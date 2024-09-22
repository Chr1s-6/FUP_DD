let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);


let tc= +input ();
let tf= tc * (9 / 5) + 32
console.log(tf.toFixed(6));