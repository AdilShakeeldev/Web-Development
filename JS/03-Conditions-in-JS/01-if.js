// what are conditions? 

var num = 100;
//only if the condition is true then it will go in flower bracket
// if (num > 41) {    
//     console.log("Yes the number is greater than 41 " + num)
// } else {
//     console.log('No the number is not greater than 41 ' + num)
// }

var readline = require('readline-sync');

// console.log('Odd or Even Checker')
// var number = readline.questionInt("Enter the number: ");

// if (number % 2 == 0) {
//     console.log ('The given number is Even');
// } else {
//     console.log ('Given number is Odd')
// }

// Problem 1

var age = readline.questionInt("Enter voter age: ")
if (age >= 18){
    console.log('eligible to vote');
} else {
    console.log('Rejected')
}

// Problem 2
var number = readline.questionInt('Enter the number: ');
if (number >= 0) {
    console.log('Number is positive')
} else {
    console.log('Number is negative')
}

var status = readline.question("weather status?: ")
if (status == "Rainy" || "rainy" ) {
    console.log ('Happy')
} else {
    console.log ("It's very warm outside");
}

