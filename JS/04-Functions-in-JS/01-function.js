// Function - A block of code to perform specific task and reuse the block without the effort of rewriting.
// Re-writing code again and again = not a efficient programmer
// 

// Creating a function

// function sayNigga(name){
//     console.log('Hello', name)
// }

// Calling of Function
// sayNigga("buddy");
// ṣayNigga("{name: adil}") => Obj

// Can declare all forms of data in function

// Creating return function
function namastey(){
    return 'Hello from Finland';
}

var hello = namastey();
console.log(hello);

// console.log(namastey());
// import readlineSync from 'readline-sync';
// console.clear()
// var GetUserRole = function Username(name, role) {
//     name = readlineSync.question('Enter Your Name: ');
//     role = readlineSync.question('Enter Your Role: ');
//     if (role == "admin") {
//         return(`${name} is now ${role} and gets full access`)
//     } else if (role == "subadmin" | "sub-admin") {
//         return(`${name} is now ${role} and gets access to delete/create courses `)
//     } else if (role == "user") {
//         return(`${name} is now ${role} and gets access to only consume content`)
//     } else if (role == "teacher") {
//         return(`${name} is now ${role} and gets access to delete tests`)
//     } else{
//         return(`${role} is not a Valid Role`)
//     }
// }

// console.log(GetUserRole());
