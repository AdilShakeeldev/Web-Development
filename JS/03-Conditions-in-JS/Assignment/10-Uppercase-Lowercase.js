// Write a Javascript program to check whether a character is uppercase or lowercase alphabet.
import readlineSync from 'readline-sync';

let Uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var character = readlineSync.question('Enter the character: ')
if (Uppercase.indexOf(character) !== -1){
    console.log('Given Input is Uppercase');
} else if(lowercase.indexOf(character) !== -1){
    console.log('Given input is lowercase')
} else {
    console.log('Invalid input')
}