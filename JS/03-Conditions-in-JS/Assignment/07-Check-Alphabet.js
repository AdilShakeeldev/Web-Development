// JS program to check if input is alphabet or not
import readlineSync from 'readline-sync';

let alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var character = readlineSync.question('Enter the character: ')
if (alphabet.indexOf(character) !== -1){
    console.log('Given Input is Alphabet');
} else {
    console.log('Given input is not an Alphabet')
}