// Module in NodeJS
// Node.js has a set of built-in modules which you can use without any further installation.
// To include a built-in module, use the require() function with the name of the module:

const fs = require('fs');

let fileText = fs.readFileSync('input.txt', 'utf-8');
fileText = fileText.toUpperCase();
fileText = fileText.split(' ').join('_');
fileText = fileText.split('').reverse().join('');
fileText = fileText.toLowerCase();
fileText = fileText.replace('s', 'S');

fs.writeFileSync('output.txt', fileText);
console.log('File has been written');
let fileText2 = fs.readFileSync('output.txt', 'utf-8');
console.log(fileText2);

