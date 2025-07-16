// Truth Tables

/**
 * Logical AND operator (&&)
 *  A   B   A && B
 *  0   0      0
 * 0    1      0
 * 1    0      0
 * 1    1      1
 * 
 * Logical OR operator (||)
 *  A   B   A || B
 *  0    0       0
 *  0    1      1
 *  1    0      1
 *  1    1      1
 * 
 * Logical NOT (!)
 *  A   !A
 *  0    1
 *  1    0
 */

console.log('AND'); // it will find the first false
// console.log(false && false);  // false
// console.log(true && false); // false
// console.log(false && true); // false
// console.log(true && true); // true
// console.log(100 && 40 && 30);
// console.log(110 && 40 && 0 && 15);
// console.log(100 && 40 && "" && 15);
// console.log(100 && 0 && 46 && 384 && 56);
// console.log(100 && 40 && undefined && 15);
// console.log(100 && 40 && null && 15);

// When used Logical AND, the code will check for a false value if any false values are found then it will display false

// Falsy Values = 0 = false
// If any falsy values are detected then the code will look at it as false data
/**
 * 0
 * Empty String
 * undefined
 * null
 * false
 * NaN
 */

console.log('OR');
// console.log(false || false); // false
// console.log(true || false); // true
// console.log(false || true); // true
// console.log(true || true); // true

// When used Logical OR, the code will look for the first true value and display it as output

// console.log(100 || 40 || 30); // true
// console.log(100 || 40 || 0 || 15); // true
// console.log(100 || 40 || "" || 15); // true 
// console.log(100 || 0 || 46 || 384 || 56); // true
// console.log(100 || 40 || undefined || 15); // true
// console.log(100 || 40 || null || 15); // true
// console.log("" || 0 || undefined || null || NaN | "hello"); // assginment
// console.log("" || "7")

console.log("NOT");
console.log(!false);

// adding ! before any false data it converts them into true
