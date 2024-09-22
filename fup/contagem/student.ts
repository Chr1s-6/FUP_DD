function count(vet: number[], value: number): number {
    let count = 0;
    for (let elem of vet){
        if (elem === value){
            count++;
        }
    }
    return count;
}

function sum(vet: number[]): number {
    let soma = 0;
    for (let elem of vet){
        soma += Math.abs(elem);
    }
    return soma;
}

function average(vet: number[]): number {
    return sun(vet) / vet.length;
}

function more_men(vet: number[]): string {
    let men = 0;
    let women = 0;
    for (let elem of vet){
        if (elem > 0){
            men++;
        }
        else if (elem < 0){
            women++;
        }
    }
    if (men > women){
        return "men";
    }
    if (men < women){
        return "women";
    }
    return "draw";
}

function half_compare(vet: number[]): string {
    let half = Math.floor(vet.lenght / 2);
    let primeiro = sum(vet.slice(0, half);
    let segundo = sum(vet.slice(half);
    
    return "";
}

function sex_battle(vet: number[]): string {
    let men = avarage(vet.filter(elem => elem > 0);
    let women = avarage(vet.filter(elem => elem < 0);
    return "";
}

if (require.main === module) {
}

export { count, sum, average, more_men, half_compare, sex_battle };