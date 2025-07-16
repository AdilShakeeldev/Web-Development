var students =  ['Mohiddin', 'Suleiman', 'Kareem', 'Vasiya', 'Amtul','Rafiya'];
//                  0           1           2           3       4       5       
console.log(students);
console.log(students.fill("f",2,4)); // [ 'Mohiddin', 'Suleiman', 'f', 'f', 'Amtul', 'Rafiya' ]

var testArray = [2,4,5,6,56,3,53,2,1,42,5,2,5];
// console.log(testArray);

const result = testArray.filter((ele)=>{
    return ele != 2;
});
// returns elements not equal to 2
// Filtering Elements from array

console.log(result);