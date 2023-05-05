const fs = require("fs");     // Node.js module for file system


const buf_data = fs.readFileSync("file.txt", "utf8");      // File is read synchronously

console.log(buf_data);

fs.renameSync("file.txt", "file1.txt");       // File is renamed synchronously