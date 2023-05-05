const os = require('os');     // Importing os module

// Get full information about the operating system
let totalMemoryGB = (os.totalmem() / 1024 / 1024 / 1024).toFixed(2);
let freeMemoryGB = (os.freemem() / 1024 / 1024 / 1024).toFixed(2);
let uptime = os.uptime();
let homeDir = os.homedir();
let hostname = os.hostname();
let tmpDir = os.tmpdir();
let platform = os.platform();
let release = os.release();
let type = os.type();
let userInfo = os.userInfo();
let networkInterfaces = os.networkInterfaces();
let cpus = os.cpus();
let arch = os.arch();
// Print the information
console.log(`Total Memory: ${totalMemoryGB} GB`);
console.log(`Free Memory: ${freeMemoryGB} GB`);
console.log(`Uptime: ${uptime} seconds`);
console.log(`Home Directory: ${homeDir}`);
console.log(`Hostname: ${hostname}`);
console.log(`Temporary Directory: ${tmpDir}`);
console.log(`Platform: ${platform}`);
console.log(`Release: ${release}`);
console.log(`Type: ${type}`);
console.log(`Architecture: ${arch}`);
// print user information
console.log(`User Information: 
     Username: ${userInfo.username}
     Home Directory: ${userInfo.homedir}
     UID: ${userInfo.uid}
     GID: ${userInfo.gid}
     Shell: ${userInfo.shell}`);
// print network interfaces
console.log(`Network Interfaces: 
     ${JSON.stringify(networkInterfaces, null, 4)}`);
// print CPU information
console.log(`CPU Information:
     ${JSON.stringify(cpus, null, 4)}`);




// console.log(os.cpus());       // Get information about the CPU
// console.log((os.freemem() / 1024 / 1024 / 1024).toFixed(2));   // Get free memory in GB
// Total memory in GB
// console.log(`${os.totalmem() / 1024 / 1024 / 1024} GB`);   // Get total memory in GB
// console.log(os.homedir());    // Get home directory
// console.log(os.hostname());   // Get hostname
// console.log(os.networkInterfaces());   // Get network interfaces
// console.log(os.platform());   // Get platform
// console.log(os.release());    // Get release
// console.log(os.tmpdir());     // Get temporary directory
// console.log(os.type());       // Get type
// console.log(os.userInfo());   // Get user information


//  OS Module is used for following things:
// 1. Get information about the operating system
// 2. Get information about the CPU
// 3. Get free memory
// 4. Get total memory
// 5. Get home directory
// 6. Get hostname
// 7. Get network interfaces
// 8. Get platform
// 9. Get release
// 10. Get temporary directory
// 11. Get type
// 12. Get user information


