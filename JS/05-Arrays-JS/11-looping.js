const arr =[3432,34234,235,23,[99,98,97,[10,200,10]]];

for(let i = 0; i<arr.length; i++){
    console.log(arr[i]);
    for(let j = 0; j < arr[i].length; j++){ 
        console.log(arr[i][j]);
        for(let k = 0; k <arr[i][j].length; k++){
            console.log(arr[i][j][k]);
        }
    }
}

// 3432
// 34234
// 235
// 23
// [ 99, 98, 97, [ 10, 200, 10 ] ]
// 99
// 98
// 97
// [ 10, 200, 10 ]
// 10
// 200
// 10