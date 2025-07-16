import readlineSync from 'readline-sync';
console.clear();

console.log('Simple Calculator');
console.log(" '+' for Addtion, '-' for subraction, '*' for multiplication, '/' for division");
console.log('Choose what arthematic opeation you want to perform')
var operation = readlineSync.question('Enter Operation sign: ');
if (operation == '+' || operation == '-' || operation == '*' || operation == '/') {
    var a = readlineSync.questionInt('Enter First number: ')
    var b = readlineSync.questionInt('Enter Second number: ')
    switch (operation) {
        case '+':
            console.log(a + b)
            break;
        case '-':
            console.log(a - b)
            break;
        case '*':
            console.log(a * b)
            break;
        case '/':
            console.log(a / b)
            break;
        default:
            console.log('Please enter right operation sign')
            break;
    }
} else {
    console.log('Invalid Operation')
}