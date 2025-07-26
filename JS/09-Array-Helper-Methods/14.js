const obj = {a:1,b:2,c:3,d:4,e:5,f:6};

let sum = 0;
for (let keys in obj){
    console.log(keys, obj[keys]);
    sum += obj[keys];
}
console.log(sum)