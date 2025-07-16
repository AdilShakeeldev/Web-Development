// var data = [100, 200, 300, 400];
// console.log(data.length)

// Object Oriented Way

// var arr = []; // declaring empty array
// arr[0] = 'CFI'; // adding element in specific index number
// arr[99] = 'bootcamp' // adding element in specific index number
// console.log(arr) // [ 'CFI', <98 empty items>, 'bootcamp' ]
// console.log(arr.length) // 100

var data = [];

data[0] = 'Hi';
data[1] = 'Hello';

console.log(data.length);

console.log('Initial Array: ', data)

// Inserting elements in the array = .push() = inserts element in the end of the array
data.push('mars');
console.log('Inserting an element using push:', data)

// .unshift() = inserts new elements in the start of an array
data.unshift([{buddy: 'no',batman:'yes',buddy:'wow'},'12']);
console.log('Inserting using unshift: ', data[0])

// .pop() = Deletes last element from array
data.pop()
console.log('Deleting last element from array: ',data)

// .shift() = removes element from the start of the array
data.shift();
console.log('Deleting first element from array: ', data)
