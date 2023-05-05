const fs = require("fs");

// 1. Create a folder
fs.mkdir("challenge2", (err) => {
     console.log("Folder created");
});

// 2. Create a file (bio.txt) inside the folder
fs.writeFile("challenge2/bio.txt", "My name is Sunny Sahsi.", (err) => {
     console.log("File created");
});

// 3. Append data to the file
fs.appendFile("challenge2/bio.txt", " I am Front End Developer at xPro.inc.", (err) => {
     console.log("Data appended");
});

// 4. Read the file without getting buffer data at first and then convert it to string
fs.readFile("challenge2/bio.txt", "utf-8", (err, data) => {
     console.log(data);
});

// 5. Rename the file
fs.rename("challenge2/bio.txt", "challenge2/myBio.txt", (err) => {
     console.log("File renamed");
});

// 6. Delete the file
fs.unlink("challenge2/myBio.txt", (err) => {
     console.log("File deleted");
});

// 7. Delete the folder
fs.rmdir("challenge2", (err) => {
     console.log("Folder deleted");
});

// In asynchronous way, we can't use the return value of a function in another function. So, we have to use callback function to get the return value of a function.
