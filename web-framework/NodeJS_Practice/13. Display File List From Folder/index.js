// Display File List From Folder
// This example shows how to display a list of files in a folder.

const fs = require('fs');          // Load the File System to execute our common tasks (CRUD)
const path = require('path');      // Load the Path module

const dirPath = path.join(__dirname, 'files');  // Get the path to the files folder
console.log(dirPath);       // Display the path to the files folder

for (i = 1; i <= 5; i++) {
     // fs.writeFileSync(dirPath + `/hello_${i}.txt`, 'File Number ' + i); 
}

fs.readdir(dirPath, (err, files) => {
     if (err) {
          console.log(err);
     } else {
          // console.log(files);        // Display the files in the folder as an array

          // Log the files individually
          files.forEach(file => {
               console.log(file);
          });
     }
});

// Interveiw Question:
// Q: Can we gat the files from the another folder?
// A: Yes, we can get the files from another folder. We just need to change the path. 

