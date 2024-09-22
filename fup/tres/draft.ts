let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

class Herois {
    nome: string = ""; //atributos
    especie: string = "";
    idade: number = 0;
    constructor(nome: string, especie: string, idade: number) { // parâmetros
        this.nome = nome;
        this.especie = especie;
        this.idade = idade;
    }
}

let hero: Herois[] = [
    new Herois("Ruby", "Humano", 16), //indice 1
    new Herois("Nana", "Leonina", 180) //indice 2
]



hero.push(new Herois("Kagura", "Humana", 17));
hero.push(new Herois("Cici", "Humana", 16));


for (let i = 0; i < hero.length; i++) {
    console.log(hero[i].nome + ":" + hero[i].especie + ":" + hero[i].idade)
}

