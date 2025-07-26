const data = [
    { a: 1, b: 2 },
    { aa: 11, bb: 22 },
    { aaa: 111, bbb: 222 }
];
let sum = 0;
data.forEach((ele)=> {
    for(let keys in ele){
        sum += ele[keys]
    }
})
console.log(sum)