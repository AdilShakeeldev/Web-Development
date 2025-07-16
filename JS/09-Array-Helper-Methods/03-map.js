// for loop and map has same syntax but map returns answer in a new array

const arr = [12, 6 , 7 , 23 , 1 , 101, 45, 43, 34, 5 ,7 , 8, 6, 923, 2323, 94]

const result = arr.map((ele)=> {
    return ele * 2;
});

console.log(result);
console.log(arr);