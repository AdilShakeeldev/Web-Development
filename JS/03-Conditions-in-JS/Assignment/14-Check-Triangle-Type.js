// Write a Javascript program to check whether the triangle is equilateral, isosceles or scalene triangle.
import readlineSync from 'readline-sync';

var a = readlineSync.questionInt("Enter side a: ")
var b = readlineSync.questionInt("Enter side b: ")
var c = readlineSync.questionInt("Enter side c: ")

if (a == b && b == c && a == c){
    console.log("It's an equilateral triangle")
} else if (a == b && a > c && c > 0 || b == c && b > a && a > 0|| a == c && a > b && b > 0){
    console.log("It's a isoceles triangle")
} else if (a !== b && b !== c && a !== c){
    console.log("It's an scalene triangle")
} else {
    console.log("Triangle is not valid!")
}