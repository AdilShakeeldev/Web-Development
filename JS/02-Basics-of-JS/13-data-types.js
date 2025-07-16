// Primitive Data type:

// String (Set of Characters)
// Number (Integers)
// Float (numbers with decimals)
// Boolean (True/False)

// Non-Primitive Data Types:

// Object (Key and Value pairs)
// Arrays: []
// functions ()

var profile = {
    fullName: "Adil Mohammed Shakeel",
    age: 21,
    city: "Hyderabad"
};

console.log(profile);
console.log(typeof(profile));

// Create a program where you take user input for a employer profile.
// age, first name, last name, city, martial status, job role, address[home, work, remote (options)], salary
var readline = require('readline-sync');
var employerProfile = {
    firstname: readline.question("Enter your first name: "),
    lastname: readline.question("Enter your last name: "),
    age: readline.questionInt("Enter your age: "),
    city: readline.question("Enter your city: "),
    maritalStatus: readline.keyInYN("marital status: "),
    jobrole: readline.question("Enter your job role: "),
    address: {
        home: readline.question("Enter your home address: "),
        work: readline.question("Enter your work address: "),
        remote:readline.question("Enter your remote address: ")
    },
    salary: readline.question("Enter your monthly salary: ")
}

// console.log(employerProfile);

// console.log(Object.keys(employerProfile.address));
// console.log(employerProfile.age);
// console.log(Object.values(employerProfile));
// console.log(employerProfile.address.work);
