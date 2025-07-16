// if logged in => logout
// else please login
var readline = require('readline-sync');

// var loginstatus = readline.keyInYN('user logged in? ')
// if (loginstatus == true){
//     console.log('Logout')
// } else{
//     console.log('please login')
// }

// ternary operator
// var loginstatus = true ? console.log('Show Logout button') : console.log('Show Login button')
// var <variable name> = => <expression> => ? <ternary/question mark> => <if expression true> => ;<semi colon to seperate true or false> => <if expression false>

// var a = 1000, b = 30, c = 120;
// a < b ? console.log('B is the maximum') : console.log('A is the maximum');
// a > b ? (a > c ? console.log('A is greatest') : console.log('C is greatest') ) : (b > c ? console.log('B is greatest') : console.log('C is greatest'))
var num = 0;

num > 0 ? console.log('Number is positive') : (num == 0 ? console.log('Number is zero'): console.log('Number is negative'));

//ternary else if
// condition ? true : (condition2 ? true : false) 
