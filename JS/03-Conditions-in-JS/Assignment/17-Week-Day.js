// Write a Javascript program to input week number and print week day.

let weekDay = 1;
if (weekDay < 8 && weekDay > 0) {
    switch (weekDay) {
    case 1:
        console.log('Sunday')
        break;
    case 2:
        console.log('Monday')
        break;
    case 3:
        console.log('Tuesday')
        break;
    case 4:
        console.log('Wednesday')
        break;
    case 5:
        console.log('Thursday')
        break;
    case 6:
        console.log('Friday')
        break;
    case 7:
        console.log('Saturday')
        break;

    default:
        console.log('Please enter valid number')
        break;
}
} else {
    console.log('Invalid Operation')
}