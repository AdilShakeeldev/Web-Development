// Write a Javascript program to input any character and check whether it is alphabet, digit or special character.
import readlineSync from 'readline-sync';

var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ".", "`", "~", "|", "<", ">", "=", "-", "_"]
var digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var alphabets = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var character = readlineSync.question('Enter the input: ')
if (special.indexOf(character) !== -1){
    console.log('Given Input is Special Character');
} else if(digit.indexOf(character) !== -1){
    console.log('Given input is Digit')
} else if(alphabets.indexOf(character) !== -1){
    console.log('Given Input is alphabet')
}