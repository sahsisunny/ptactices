// File System Asynchronous Methods

const fs = require("fs");

// File is written asynchronously meaning that the next line of code will be executed before the file is written to the system  and the callback function will be called when the file is written to the system successfully or not.
fs.writeFile("file.txt", "Hii i am from MARS!", (err) => {
     if (err) throw err;
     console.log("File is created");
});

// appendFile() method is used to append data to a file. If the file does not exist, the file will be created
fs.appendFile("file.txt", " I am from Earth!", (err) => {
     if (err) throw err;
     console.log("File is appended");
});

// readFile() method is used to read data from a file and the data is returned in the callback function as a parameter:
fs.readFile("file.txt", "UTF-8", (err, data) => {
     if (err) throw err;
     console.log(data);
});


fs.rename("file.txt", "file1.txt", (err) => {
     if (err) throw err;
     console.log("File is renamed");
}); 