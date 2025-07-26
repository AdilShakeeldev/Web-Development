

let sum = 0;
// sum of all values
for(let i = 0; i<data.length;i++){
//  console.log(data[i])
    let obj = data[i];
    let values = Object.values(obj);
//  console.log(values);
    for(let j = 0; j < values.length;j++){
        console.log(values[j]);
        sum += values[j];
    }
}
console.log(sum)