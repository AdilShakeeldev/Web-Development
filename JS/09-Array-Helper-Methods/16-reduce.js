const arr = [22,44,66,99,100];
// .reduce();

// let sum = 0;
// arr.forEach(ele => sum += ele)
// console.log(sum)

let output = arr.reduce((sum,ele)=>{return sum + ele},0);
console.log(output)

function addTwoNumbers(num1,num2,sum=0){
    sum = num1 + num2;
    return sum;
}
console.log(addTwoNumbers(12,12))