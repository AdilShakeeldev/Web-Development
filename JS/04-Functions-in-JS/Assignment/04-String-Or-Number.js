import readlineSync from 'readline-sync'
import { isNumberObject } from 'util/types';




// Function to check if value is number or string

function check(){
    let value = readlineSync.question('Enter the value: ');
    if ((typeof value) ? number : string){
        return 'Input is a number'
    } else { 
        return 'Input is a string'
    }

}

console.log(name)