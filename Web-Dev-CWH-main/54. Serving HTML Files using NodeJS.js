//Serving HTML Files using NodeJS

// Importing the http module from the nodejs core library for creating a server
const http = require('http');

// Importing the fs module for reading files
const fs = require('fs');

// Loading the html file into a variable
const HTMLFile = fs.readFileSync('HTML_and_CSS/Form in HTML.html');

// Creating a server
const server = http.createServer((req, res) => {
     // Setting the content type to html
     res.writeHead(200, { 'Content-Type': 'text/html' });

     // Sending the html file to the browser
     res.end(HTMLFile);
});

// Listening to the port 3000
server.listen(80, '127.0.0.1', () => {
     console.log('Server is running on port 80');
});
