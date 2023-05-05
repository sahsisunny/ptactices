const fs = require('fs');

// Getting input from Command Line
let input = process.argv;

if (input[2] === 'create') {
     fs.writeFileSync(input[3], input[4]);
     console.log("File Created");
} else if (input[2] === 'read') {
     let data = fs.readFileSync(input[3], 'utf-8');
     console.log(data);
} else if (input[2] === 'delete') {
     fs.unlinkSync(input[3]);
     console.log("File Deleted");
} else if (input[2] === 'update') {
     fs.writeFileSync(input[3], input[4]);
     console.log("File Updated");
} else {
     console.log("Invalid Command");
}

// input[2] = commnad
// input[3]  = file name
// input[4] = data to write/update/create/delete


// Interview Question
// 1. What is the use of process.argv?
// Ans: process.argv is used to get the input from the command line. it is an array which contains the input from the command line. it is an array of string. it is an array of arguments. it is an array of command line arguments.

