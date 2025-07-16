// Write a Javascript program to input all sides of a triangle and check whether triangle is valid or not.
import readlineSync from 'readline-sync';

var a = readlineSync.questionInt("Enter side a: ")
var b = readlineSync.questionInt("Enter side b: ")
var c = readlineSync.questionInt("Enter side c: ")

if (a + b <= c || a + c <= b || b + c <= a) {
    console.log("It's a invalid triangle!")
}  else {
    console.log("The Triangle is valid")
}
// 2 side's sum = more than other side