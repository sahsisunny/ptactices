
let a = 10;
let b = 0;

let watingData = new Promise((resolve, reject) => {        
     setTimeout(() => {
          resolve(30);
     }, 2000);
});

watingData.then((data) => {
     b =  data;
     console.log(b);   
});


// Promise function is a solution of drawback of asynchronous programming language example. it is a built-in function in NodeJS. it takes two parameters. the first parameter is resolve function and the second parameter is reject function. the resolve function is used to return the data and the reject function is used to return the error. the then() function is used to get the data from the resolve function. the catch() function is used to get the error from the reject function.

// Interview Question: What is the difference between callback function and promise function?
// Ans: 