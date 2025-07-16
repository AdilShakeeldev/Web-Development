// Write a Javascript program to input angles of a triangle and check whether triangle is valid or not.
import readlineSync from 'readline-sync';

var a = readlineSync.questionInt('Enter Angle a: ');
var b = readlineSync.questionInt('Enter Angle b: ');
var c = readlineSync.questionInt('Enter Angle c: ');

if ([a + b + c] == 180){
    console.log('The angles form a triangle')
} else {
    console.log("The Angles don't form a triangle")
}