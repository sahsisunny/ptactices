var colors = require('colors');    // Colors module used for styling console output
var simpleNodeLogger = require('simple-node-logger');    // Simple Node Logger module used for logging

console.log('Hello World'.rainbow); 
console.log('Hello World'.zebra);   
console.log('Hello World'.america);
console.log('Hello World'.trap);
console.log('Hello World'.red);
console.log('Hello World'.green);
console.log('Hello World'.blue);

// Create a logger instance
var opts = {
     logFilePath: 'mylogfile.log',
     timestampFormat: 'YYYY-MM-DD HH:mm:ss.SSS'
};
var log = simpleNodeLogger.createSimpleLogger(opts);
