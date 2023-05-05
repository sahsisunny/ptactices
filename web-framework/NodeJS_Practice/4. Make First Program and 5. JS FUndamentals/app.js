// Interview Question: What is filter function in JavaScript?

// Answer: The filter() method creates a new array with all elements that pass the test implemented by the provided function. in JavaScript filter function is used to filter the array elements based on the condition. The filter() method does not execute the function for array elements without values. The filter() method does not change the original array.

// Example:
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let res = arr.filter((item) => {
     return item < 3;
});
// console.warn(res);