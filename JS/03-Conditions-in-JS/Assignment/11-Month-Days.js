// Write a Javascript program to input month number and print number of days in that month.
import readlineSync from 'readline-sync';
let months = {
    January: 31,
    February: 28,
    March: 31,
    April: 30,
    May: 31,
    June: 30,
    July: 31,
    August: 31,
    September: 30,
    October: 31,
    November: 30,
    December: 31
}

var question = readlineSync.question("Enter Month: ")
var answer = months[question]

console.log(answer);