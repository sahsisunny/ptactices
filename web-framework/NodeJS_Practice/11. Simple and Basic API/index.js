const http = require('http');
const data = require('./data');

http.createServer((req, res) => {
     res.writeHead(200, { 'Content-Type': 'application/json' });
     res.end(JSON.stringify(data));
     res.end();
}).listen(8080);


console.log("Simple and Basic API is running ");
console.log("localhost:8080");

// Interview Question
// What is Status Code?
// Ans: Status Code is a 3 digit number which is used to tell the client about the status of the request. it  
// 200 - OK
// 201 - Created
// 202 - Accepted
// 404 - Not Found
// 500 - Internal Server Error
// 400 - Bad Request
// 401 - Unauthorized
// 403 - Forbidden