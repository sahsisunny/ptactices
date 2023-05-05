const path = require('path');      // Importing path module (core module)

console.log(path.dirname('C:/Users/ShreeRam/Documents/GitHub/LEARN_MERN/NodeJS/Path_module/index.js'));   // Get directory name

console.log(path.extname('C:/Users/ShreeRam/Documents/GitHub/LEARN_MERN/NodeJS/Path_module/index.js'));    // Get extension name

console.log(path.basename('C:/Users/ShreeRam/Documents/GitHub/LEARN_MERN/NodeJS/Path_module/index.js'));   // Get base name

console.log(path.parse('C:/Users/ShreeRam/Documents/GitHub/LEARN_MERN/NodeJS/Path_module/index.js'));      // Get object of path

// Get name of file
console.log(path.parse('C:/Users/ShreeRam/Documents/GitHub/LEARN_MERN/NodeJS/Path_module/index.js').name);

console.log(path.join(__dirname, 'test', 'second.html'));   // Join path

const myath = path.parse('C:/Users/ShreeRam/Documents/GitHub/LEARN_MERN/NodeJS/Path_module/index.js');
console.log(myath.name);
console.log(myath.ext); 

