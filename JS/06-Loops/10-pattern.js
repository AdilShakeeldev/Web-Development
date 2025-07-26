/* 
0 * 9 + 8        = 8

9 * 9 + 7        = 88
98 * 9 + 6       = 888
987 * 9 + 5      = 8888
9876 * 9 + 4     = 88888
98765 * 9 + 3    = 888888
987654 * 9 + 2   = 8888888
9876543 * 9 + 1  = 88888888
98765432 * 9 + 0 = 888888888
*/

var temp = '';
let spacing = ' ';

console.log(`0 + 9 + 8 ${spacing.repeat(7)} = 8`);

for (var count = 9; count > 1; count--){ // decrementing from 9 to 2
    temp = temp + count 
    let num = temp * 9
    let space = '';
    for (var j = 1; j<count; j++){
        space+= " ";
    }
    console.log(`${temp} * 9 + ${count - 2}${space} = ${num + (count - 2)}`)
}

// 0 + 9 + 8         = 8
// 9 * 9 + 7         = 88
// 98 * 9 + 6        = 888
// 987 * 9 + 5       = 8888
// 9876 * 9 + 4      = 88888
// 98765 * 9 + 3     = 888888
// 987654 * 9 + 2    = 8888888
// 9876543 * 9 + 1   = 88888888
// 98765432 * 9 + 0  = 888888888