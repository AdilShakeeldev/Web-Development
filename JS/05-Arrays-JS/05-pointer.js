var arr1 = [11, 22, 33];
var arr2 = arr1

console.log(arr1 == arr1);
console.log(arr1 == arr2);

console.log(arr2);
console.log(arr2[2] == arr1[2]);

arr2.push(100,101,102); // add to index => [ 11, 22, 33, 100, 101, 102 ]
console.log(arr1);