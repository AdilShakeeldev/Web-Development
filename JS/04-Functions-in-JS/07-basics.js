import readlineSync from 'readline-sync'

function add(){
    let num1 = readlineSync.questionInt('Enter Num1: ');
    let num2 = readlineSync.questionInt('Enter Num2: ')
    return num1 + num2;
}

const result = add();
console.log(result);