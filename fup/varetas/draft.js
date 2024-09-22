let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);


function verificarTriangulo(a, b, c) {
  if (a + b > c && a + c > b && b + c > a) {
      console.log("True");
  } else {
      console.log("False");
  }
}

  const a = parseFloat(input());
  const b = parseFloat(input());
  const c = parseFloat(input());

  verificarTriangulo(a, b, c);   