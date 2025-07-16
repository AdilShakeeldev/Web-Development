// Write a Javascript program to input any alphabet and check whether it is vowel or consonant.
import readlineSync from 'readline-sync';

let consonant = ["B","C","D","F","G","H","J","K","L","M","N","P","Q","R","S","T","V","W","X","Y","Z"];
let vowel = ["A","E","I","O", "U"];

var character = readlineSync.question('Enter the character: ')
if (consonant.indexOf(character) !== -1){
    console.log('Given Input is consonant');
} else if(vowel.indexOf(character) !== -1){
    console.log('Given input is vowel')
} else {
    console.log('Invalid input')
}
