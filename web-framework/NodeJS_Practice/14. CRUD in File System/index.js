// CRUD in file system
// This example shows how to create, read, update, and delete a file.

const fs = require('fs');          // Load the File System to execute our common tasks (CRUD)

// Create a file
fs.writeFileSync('hello.txt', 'Hello World!');
console.log("File Created");

// Read a file
let data = fs.readFileSync('hello.txt', 'utf-8');
console.log(data);

// Update a file
fs.appendFileSync('hello.txt', ' How are you?');
console.log("File Updated");

// Delete a file
fs.unlinkSync('hello.txt');
console.log("File Deleted");

// Rename a file
fs.renameSync('hello.txt', 'hello_world.txt');
console.log("File Renamed");

// Interview Question
// 1. What is Buffer in Node.js?
// Ams: Buffer is a temporary memory location where data is stored. It is used to store the data in binary format. It is used to store the data in chunks. It is used to store the data in bytes. It is used to store the data in hexadecimal format.

