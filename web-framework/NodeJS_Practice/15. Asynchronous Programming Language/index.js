//  Asynchronous Programming Language
// - Asynchronous Programming Language is a programming language that can perform multiple tasks at the same time. in other words, it can perform multiple tasks without waiting for the previous task to complete.
// - Node.js is an asynchronous programming language. that means it can perform multiple tasks at the same time.
// - Node.js is a single-threaded programming language. that means it can perform only one task at a time.


// Drawback of Asynchronous Programming Language Example

let a = 10;
let b = 0;

setTimeout(() => {
     b = a + 10;
}, 2000);

console.log(b);          // Output: 0 (not 20) because the setTimeout() function is asynchronous. that means it will take 2 seconds to execute. so the console.log() function will execute before the setTimeout() function. so the output will be 0.

// Solution of Drawback of Asynchronous Programming Language Example
// callback function is a solution of drawback of asynchronous programming language example.

let aa = 10;
let bb = 0;

setTimeout(() => {
     bb = aa + 10;
     console.log(bb);          // Output: 20
});
