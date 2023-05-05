// HTTP Server

const http = require('http');
const fs = require('fs');

const data = fs.readFileSync(`${__dirname}/user.json`, 'utf-8');
const objData = JSON.parse(data);


const server = http.createServer((req, res) => {
     if (req.url === '/') {
          res.end('Welcome to our home page');
     } else if (req.url === '/about') {
          res.end('Here is our short history');
     } else if (req.url === '/userapi') {
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(objData.address.city);
          // print JSON name in html tag
          
          

     } else {
          res.writeHead(404, { 'Content-Type': 'text/html' });
          res.end(` <h1>Oops!</h1> <p>We can't seem to find the page you are looking for</p> <a href="/">back home</a> `);
     }
});

server.listen(8000, '127.0.0.1', () => {
     console.log('Listening to requests on port 8000');
     console.log('http://localhost:8000/');
});