import readlineSync from 'readline-sync'
import { isNumberObject } from 'util/types';
function AreaOfRectangle(){
    let length = readlineSync.questionInt('Enter Length: ');
    let breadth = readlineSync.questionInt('Enter breadth: ');
    return length * breadth;
}
console.log(AreaOfRectangle())