// Creating Own HTTP Server
const http = require('http');      // Importing http module
const server = http.createServer((req, res) => {       // Creating server
     if (req.url === '/') {        // Checking url
          res.end('Welcome to our home page');
     } else if (req.url === '/about') {
          res.end('Here is our short history');
     } else {
          res.writeHead(404, { 'Content-Type': 'text/html' });
          res.end(` <h1>Oops!</h1> <p>We can't seem to find the page you are looking for</p> <a href="/">back home</a> `);
     }
     console.log(req.url);         // Logging request url
});
server.listen(8000, '127.0.0.1', () => {     // Listening to port 8000 and localhost
     console.log('Listening to requests on port 4000');          // Printing message
});

// After running the above code, open the browser and type http://localhost:8000/ in the address bar.
// You will see the message Hello World in the browser.
// This is how we can create our own HTTP server.
// We can also create our own server using Express.js.
// Express.js is a framework for Node.js.
// It is used to create web applications.
// It is a very popular framework for Node.js.
