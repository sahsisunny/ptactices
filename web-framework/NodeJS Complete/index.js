const http = require('http');
const fs = require('fs');

const PORT = 2000;
const HOST = 'localhost';

const home = fs.readFileSync('./index.html');
const about = fs.readFileSync('./about.html');
const contact = fs.readFileSync('./contact.html');
const error = fs.readFileSync('./404.html');

const server = http.createServer((request, response) => {
     if (request.url === '/') {
          response.writeHead(200, { 'Content-Type': 'text/html' });
          return response.end(home);
     } else if (request.url === '/about') {
          response.writeHead(200, { 'Content-Type': 'text/html' });
          return response.end(about);
     } else if (request.url === '/contact') {
          response.writeHead(200, { 'Content-Type': 'text/html' });
          return response.end(contact);
     } else {
          response.writeHead(404, { 'Content-Type': 'text/html' });
          return response.end(error);
     }
});

server.listen(PORT, HOST, () => {
     console.log(`Server is running on ${HOST}:${PORT}`);
});