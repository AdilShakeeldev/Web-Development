// JS program to check if given year is leap year or not
// leap year = divisible by 4 and if it is in hundreds then divisible by 400

let year = 2000;

if (year % 4 == 0 || year % 400 == 0){
    console.log('Given year is a leap year')
} else {
    console.log('Given year is not a leap year')
}
