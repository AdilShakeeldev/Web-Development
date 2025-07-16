/**
 * Variables are very similar to or just algebra, We assign values or data to a data type called as variable.
 * example: Adil-age = 21;
 */

// Creating a signup page using variables

// required field => full name, email, password, age, whichCourse, isLoggedIn

// we can declare variables using => var, let, const

/**
 * Camel Case: camelCaseCasing *
 * snake case: full_name
 * kebab-case: full-name
 * FullName
 */

var firstName = "Adil"; // DataType = String
var lastName = "Shakeel"; // DataType = String
var email = "adilmoahmmed0@gmail.com";
const password = "123123123";
var whichCourse = "Full Stack Product Development";
var age = 21; // DataType = Number
var isLoggedIn = true; // Datatype = Boolean

// console.log(firstName);
// console.log(lastName);
// console.log(email);
// console.log(password);
// console.log(whichCourse);
// console.log(age);
// console.log(isLoggedIn);


// console.log("Full Name:", firstName, lastName);
// console.log("Email:", email, password);
// console.log("Course Name: " + whichCourse);
// console.log("Age:", age);
// console.log("Login Success:", isLoggedIn);
// console.log("Data Type of Age :",typeof(age));
// console.log("Data Type of email :",typeof(email));
// console.log("Data Type of Login Status :",typeof(isLoggedIn));

/**
 * We can use <typeof> a builtin command to get data type of the variable
 */

// console.log(`
//     Full name of the user is: ${firstName + lastName}
//     and his email is ${email}
//     and uses the password ${password}
//     has the age ${age} 
//     is LoggedIn? ${isLoggedIn}

//     He has opted the course ${whichCourse}
// `);

// ${VariableName} <= is used when we need to display data from variable in console.log with text

var a = 5, b = 1, c = 3;
console.log(123 + 7)
// here 123 & 7 are Operands
// +,-,*,/ are the arthematic operators 

console.log(a + c);
console.log(a +=(b+c)) // 9