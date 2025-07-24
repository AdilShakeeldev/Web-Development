let num = ''; // temporary value
for (var i = 1; i <= 5; i++) {
    var space = '';// temporary value
    num += i; //changing string into i to get output
    for (var j = 1; j <= 5 - i; j++) {
        space += ' ';
    }
    console.log(space,num)
}