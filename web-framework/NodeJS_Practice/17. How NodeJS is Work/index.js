console.log("Starting NodeJS Server");

setTimeout(() => {       // it is the part od C++ code which is running in background
     console.log("Timeout 1");
}, 2000);

setTimeout(() => {
     console.log("Timeout 2");
}, 0);

console.log("Finished NodeJS Server");

// Output
// Starting NodeJS Server
// Finished NodeJS Server
// Timeout 2
// Timeout 1

// Starting NodeJS Server is printed first
// Finished NodeJS Server is printed second because it is synchronous
// Timeout 2 is printed third because it is asynchronous and it is set to 0
// Timeout 1 is printed fourth because it is asynchronous and it is set to 2000