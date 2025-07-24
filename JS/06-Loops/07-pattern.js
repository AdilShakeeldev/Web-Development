/*
     8
    88
   888
  8888
 88888
*/

// let num = ''; // temporary value
// for (var i = 1; i <= 5; i++) {
//     var space = '';// temporary value
//     num += '8'; // prints 8 in loop for 5 lines
//     // console.log(num) 
//     // 8
//     // 88
//     // 888
//     // 8888
//     // 88888
//     for (var j = 1; j <= 5 - i; j++) { //loop for spaces but minus I to leave space for 8
//         space += ' ';
//     }//this loop prints spaces
//     // console.log(space + num)
//     //     8
//     //    88
//     //   888
//     //  8888
//     // 88888
// }

/**
    1
   12
  123
 1234
12345
 */

let num = ''; // temporary value
for (var i = 1; i <= 5; i++) {
    var space = '';// temporary value
    num += i; //changing string into i to get output
    for (var j = 1; j <= 5 - i; j++) {
        space += ' ';
    }
    console.log(space,num)
}

//      1
//     12
//    123
//   1234
//  12345
