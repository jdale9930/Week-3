// To start we're going to make a simple node program for some basics.
// * Create two separate .js files. One will contain a single function, 
    //the other will be the one you run though the command line. 
// * The js file with the function should export a function that takes two numbers, 
    //and logs a random number between the two. The arguments should be able to be passed 
    //in either order (2,6) and (6,2) should both return a random number between 2 and 6.
// * Create a main file that can be called with two arguments via the command line.
// * If two numbers aren't provided, send a message to the console that one (or both) 
    //of the arguments aren't numbers.
// * If two numbers ARE provided, call the function from the other file.

let randomNum = require("./mon2").randomNum;
console.log(process.argv[2], process.argv[3])
console.log(randomNum(process.argv[2], process.argv[3]))

// console.log(randomNum(5, 10))
// console.log(randomNum(5, 15))