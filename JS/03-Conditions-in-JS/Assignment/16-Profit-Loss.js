// Write a Javascript program to calculate profit or loss.
import readlineSync from 'readline-sync';

var investment = readlineSync.questionInt("Enter your investment: ");
var returns = readlineSync.questionInt("Enter your returns: ");

var profit = returns - investment;
var loss = investment - returns;

var percent = (profit / investment) * 100
if (profit < investment){
    console.log('we had a loss of ' + loss)
} else if (returns == investment){
    console.log("We made nothing")
}else if (returns > investment){
    console.log("We made a profit of " + profit + " which is " + percent + "%")
}