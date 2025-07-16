// JS program to check whether give number is positive, negative or zero

let number = -0;

if (number > 0){
    console.log('number is positive')
} else if (number == 0 || number == -0){
    console.log('Number is zero')
} else if (number < 0){
    console.log('Number is negative')
}