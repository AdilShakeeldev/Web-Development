import readlineSync from 'readline-sync'
import { isNumberObject } from 'util/types';


// Function to check if value is small letter or capital

function letters(){
    let Uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    let lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    let value = readlineSync.question('Enter the letter: ')
    if (Uppercase.indexOf(value) !== -1){
        return 'Value is Capital letter'
    } else if (lowercase.indexOf(value) !== -1){
        return 'Value is small letter'
    } else { return 'Invalid Input'}
}

console.log(letters())