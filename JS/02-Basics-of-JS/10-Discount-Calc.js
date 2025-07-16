var readline = require('readline-sync');

var originalPrice = readline.questionInt("Enter your listing price: ");
var SellingPrice = readline.questionInt("Enter your Selling price: ");
var discount = ((originalPrice - SellingPrice) / originalPrice) * 100;
console.log("The discount is: " + discount + "%");