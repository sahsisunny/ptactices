//  Import own modules

const { add, sub, mult, div, name } = require('./oper');    // Importing the module as an object and destructuring it to get the properties
console.log("Sum of 5 and 3 = ", add(5, 3));
console.log("Sub of 5 and 3 = ", sub(5, 3));
console.log("Mult of 5 and 3 = ", mult(5, 3));
console.log("Div of 5 and 3 = ", div(5, 3));
console.log("My name is ", name);       // name is an exported property of the module