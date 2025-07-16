import readlineSync from 'readline-sync'
function powerof2(){
    let base = readlineSync.questionInt('Enter base: ')
    let power = readlineSync.questionInt('Enter power: ')
    return base ** power;
}

console.log(powerof2());