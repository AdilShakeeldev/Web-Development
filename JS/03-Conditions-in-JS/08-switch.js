// Create a program where you take user role
// and return user priviliges for that role
// Role: admin, sub-admin, user, teacher

// Admin - Gets full access 
// Sub-Admin - Gets access to delete/create courses
// User - Gets access to only consume content
// Teacher - Gets access to delete tests

// var Roles = {
//     Admin: "Gets full Access",
//     subadmin: "Gets access to delete/create courses",
//     user: "Gets access to only consume content",
//     teacher: "Gets access to delete tests"
// }
// var require = require('readline-sync'); won't work with lastest JS

// var role = require.question("Enter your Role: ")

// if (role == "admin") {
//     console.log("Gets full Access")
// } else if (role == "subadmin") {
//     console.log("Gets access to delete/create courses")
// } else if (role == "user"){
//     console.log("Gets access to only consume content")
// } else if (role == "teacher"){
//     console.log("Gets access to delete tests")
// }

// switch (role) {
//     case "admin":
//         console.log("Gets full Access");
//         break;
//     case "subadmin":
//         console.log("Gets access to delete/create courses");
//         break;
//     case "user":
//         console.log("Gets access to only consume content");
//         break;
//     case "teacher":
//         console.log("Gets access to delete tests");
//         break;
//     default:
//         console.log("Trial User / Guest User")
//         break;
// }

// Assignment
// Create calculator for + - * / using switch

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