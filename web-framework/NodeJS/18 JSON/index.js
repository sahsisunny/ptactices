const biodata = {
     name: "Sunny Sahsi",
     age: 21,
     hobbies: ["Coding", "Gaming", "Reading"],
     isMarried: false,
     schoolList: [
          {
               name: "Sri Guru Gobind Singh Public School",
               yearIn: 2008,
               yearOut: 2019,
               major: null,
          },
     ],
     skills: [
          {
               skillName: "HTML",
               level: "beginner",
          },
          {
               skillName: "CSS",
               level: "beginner",
          },
     ],
     interestInCoding: true,
};

// console.log(biodata.skills[1].skillName);

// Convert JSON to Object
const biodataObj = JSON.stringify(biodata);
console.log(biodataObj);

// Convert Object to JSON
const biodataJSON = JSON.parse(biodataObj);
console.log(biodataJSON);


// Task
// 1. Create a JSON file with your biodata
// 2. Read the JSON file and convert it to an object and store in another text file
// 3. Read the text file and convert it to JSON and store in another JSON file
// 3. Read the both JSOn and text file and print it in the console using console.log()