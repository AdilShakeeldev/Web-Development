/**
 * Write a function to calculate the area of a rectangle.
 * Write a function to check wheter a business is profitable or not.
 * Write a function that checks if the value is capital or small letter
 * Write a function to check if the value is number or string.
 * Write a function that accepts a number as a parameter and checks if wheter it is a prime.
 * Write a function to return the typeof the value.
 * Write a function to add given numbers
 * Write a function to check the area of triangle.
 * Write a function to compare which number is greater.
 * Write a function to print the function name.
 */

// Function to calculate area of rectangle
import readlineSync from 'readline-sync'
import { isNumberObject } from 'util/types';




// Function to check if value is number or string

function check(){
    let value = readlineSync.question('Enter the value: ');
    console.log(typeof(value))

}

var hello = check();
console.log(hello)