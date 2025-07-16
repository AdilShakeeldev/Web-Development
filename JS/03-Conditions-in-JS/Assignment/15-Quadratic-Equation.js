// Write a Javascript program to find all roots of a quadratic equation.

import readlineSync from 'readline-sync';

console.log('Enter the Co-efficient values of ax^2+bx+c=0')
var a = readlineSync.questionInt("Enter Value A: ")
var b = readlineSync.questionInt("Enter Value B: ")
var c = readlineSync.questionInt("Enter Value C: ")
var root1 = ((b * -1)+((b ** 2) - (4*a*c)) ** (1/2)) / (2 * a);
var root2 = ((b * -1)-((b ** 2) - (4*a*c)) ** (1/2)) / (2 * a);
var dec = ((b ** 2) - (4*a*c));
if (dec > 0){
    console.log('Roots are real')
} else if (dec < 0){
    console.log('Roots are complex and imaginary')
} else if (dec == 0){
    console.log('Roots are real and same')
}
console.log ('Roots are '+ root1 + " " + root2)

console.log(a + "*x**2+" + b +"*x+" + c +"= 0")
console.log('The roots of this equation = ' + root1 + ' ' + root2)
