

// function isEven(a){
//     var a = readlineSync.questionInt('Enter the Number: ')
//     if (a % 2 == 0){
//         return true;
//     } else{
//         return false;
//     }
// }
// console.log(isEven());

// function should always return something
// the return is used to reutrn the value of the function call
// the return statement denotes that the function has ended
// once return is written the code stops executing the code, lines after return is not gonna run

// function sayHi(){
//     return 'Say Hello';
//     console.log('Say after hello');
//     console.log('Anything')
// }

// console.log(sayHi());

// function funcName(){
//     console.log('Say hello!');
// }

var funcName = function(){
    return ('Say hello');
}
console.log(funcName())

// ES6+
// call back funtions
var funName = (message) =>{
    return (message);
}

console.log(funName('buddy'))