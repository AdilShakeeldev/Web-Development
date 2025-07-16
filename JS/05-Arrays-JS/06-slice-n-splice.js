var food = ['Biryani', 'Chai', 'Wrap', 'Burger', 'Rice'];
console.log('Original Array: ', food) // Original Array:  [ 'Biryani', 'Chai', 'Wrap', 'Burger', 'Rice' ]
                                                             // 0          1        2       3       4       
// var data = food.slice(0,3); // Sliced Array:  [ 'Biryani', 'Chai', 'Wrap' ]
// // Start value is inclusive and end value is exclusive
// console.log('Sliced Array: ', data)

// splice => Slice and Replace

var data = food.splice(1,2, "Ali", 5);
console.log('Spliced Array: ', data)
console.log('Original Array: ', food) 

// Removes the data from index numbers provided and replaces with string or number we enter
