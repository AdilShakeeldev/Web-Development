// * * * *
// * * * *
// * * * *
// * * * *
// * * * *

var temp = '';
// giving empty string

for(let rows = 1; rows <=5; rows++){
    temp += '* '; // giving string to temp
}
// console.log(temp) // * * * * *

// but since we need the complete output we need another loop

for (let i = 1; i<=4;i++){ // Loop for repeating line 'n' number of times
    console.log(temp)
}
// * * * * * 
// * * * * * 
// * * * * * 
// * * * * * 