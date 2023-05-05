const http = require('http');

// FUnction to handle requests and send responses
function requestHandler(request, response) {
     console.log(request.url);     // Log the request URL
     response.end('<h1>Hello Node.js Server!</h1>');     // Send a response
}

// Arrow function handler
const requestHandlerArrow = (request, response) => {
     console.log(request.url);     // Log the request URL
     response.end('<h1>Hello Node.js Server!(Arrow Function)</h1>');     // Send a response
}

// http.createServer([options][, requestListener])
http.createServer(requestHandlerArrow).listen(4500);