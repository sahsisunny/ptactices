// Task
// 1. Create a JSON file with your biodata
// 2. Read the JSON file and convert it to an object and store in another text file
// 3. Read the text file and convert it to JSON and store in another JSON file
// 3. Read the both JSOn and text file and print it in the console using console.log()

// Import required modules
const fs = require("fs");

// JSON Data
const biodata = {
     name: "Sunny Sahsi",
     age: 21,
     hobbies: ["Coding", "Gaming", "Reading"],
     isMarried: false,
     interestInCoding: true,
};


// Write JSON data to a JSON file
fs.writeFile("biodata.json", JSON.stringify(biodata), (err) => {      // JSON.stringify() converts the object to JSON 
     console.log("File created");
});

// Read JSON data from a file
fs.readFile("biodata.json", "utf-8", (err, data) => {
     // console.log(data);       // JSON data
     const biodataObj = JSON.parse(data);         // JSON.parse() converts the JSON to object
     // console.log(biodataObj);    // Object data
});

