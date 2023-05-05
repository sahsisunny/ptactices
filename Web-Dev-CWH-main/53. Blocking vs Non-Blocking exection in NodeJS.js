// Two Types of Execution in NodeJS
// 1. Blocking Execution or Synchronous Execution
// In blocking execution, the next line of code is executed only after the current line of code is executed.

// 2. Non-Blocking Execution or Asynchronous Execution
// In non-blocking execution, the next line of code is executed without waiting for the current line of code to be executed.


// Blocking Execution
// In blocking execution, the next line of code is executed only after the current line of code is executed.
// const fs = require('fs');
// const data = fs.readFileSync('input.txt');
// console.log(data.toString());
// console.log("Program Ended");

// Non-Blocking Execution
// In non-blocking execution, the next line of code is executed without waiting for the current line of code to be executed.
const fs = require('fs');
fs.readFile('input1.txt', (err, data) => {
  if (err) return console.error(err);
  console.log(data.toString());
});
console.log("Program Ended");