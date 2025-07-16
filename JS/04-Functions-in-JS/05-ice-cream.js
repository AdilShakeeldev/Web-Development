/**
 * Ice cream
 * 
 * Big Brother - Feed both of them
 * Middle One - Big brother 
 * Yougest One - Big brother and Middle One
 * 
 */

console.clear();

var icecream = "Elder Brothers Ice cream";
console.log('Line number 12', icecream);

function middleOne(){
    var icecream = 'Middle Brothers Ice Cream';
    console.log('Line Number 16', icecream);


    function youngerOne(){
        var icecream = 'Younger Brothers Ice Cream 🍨';
        console.log('Line number 20', icecream);
        middleOne();
    }
    // youngerOne();
}

// youngerOne()

console.log(typeof middleOne);

