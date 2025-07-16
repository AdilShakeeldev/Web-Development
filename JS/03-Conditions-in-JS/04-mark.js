var readline = require('readline-sync');

// if (marks <= 30) {
//     console.log('result = FF')
// } else if (30 < marks <= 40){
//     console.log('result = DD')
// } else if (50 < marks <= 60){
//     console.log('result = CC')
// } else if (60 < marks <= 70){
//     console.log('result = BC')
// } else if (70 < marks <= 80){
//     console.log('result = BB')
// } else if (80 < marks <= 90){
//     console.log('result = AB')
// } else if (90 < marks){
//     console.log('result = AA')
// }
console.log('Marks Calculator');
var marks = readline.questionInt('Enter Your Marks: ');

if (90 < marks) {
    console.log('result = AA')
} else if (80 < marks && marks <= 90) {
    console.log('result = AB')
} else if (70 < marks && marks <= 80) {
    console.log('result = BB')
} else if (60 < marks && marks <= 70) {
    console.log('result = BC')
} else if (50 < marks && marks <= 60) {
    console.log('result = CC')
} else if (40 < marks && marks <= 50) {
    console.log('result = CD')
} else if (30 < marks && marks <= 40) {
    console.log('result = DD')
} else if (30 >= marks) {
    console.log('result = FF')
}
