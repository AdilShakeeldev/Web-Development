const data = [1,2,3,4,5,6,7,8,9,10];

let sumOfData = data.reduce((sum,ele)=>sum + ele,0);
console.log(sumOfData);
let product = data.reduce((prod,ele)=>{return prod * ele},1);
console.log(product)
