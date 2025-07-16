const arr = [[22, 33],[2,3], [222, 333, 44, 55]];
// console.log(arr[0][2]);

// [ 22, 33 ]
// [ 2, 3 ]
// [ 222, 333, 44, 55 ]

for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr[i].length;j++){
        console.log(arr[i][j]);
    }
    // console.log(arr[i])
}

// Using loops we can make display data from arrays in patterns 