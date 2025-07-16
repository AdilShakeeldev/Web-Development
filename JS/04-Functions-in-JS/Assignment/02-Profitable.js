import readlineSync from 'readline-sync'
import { isNumberObject } from 'util/types';


// Function to check if business is profitable
function business(){
    let Cost = readlineSync.questionInt('Enter Costing Price (per product): ');
    let Sell = readlineSync.questionInt('Enter Selling Price: ')
    if ((Sell - Cost) <= Cost ){
        return 'Business is not profitable'
    } else {
        return 'Business is profitable'
    }
}

console.log(business());