//Custom Backend creating using NodeJS

const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;
const homePage = fs.readFileSync('index.html');
const aboutPage = fs.readFileSync('about.html');
const contactPage = fs.readFileSync('contact.html');
const notFoundPage = fs.readFileSync('404.html');
const servicesPage = fs.readFileSync('services.html');

const server = http.createServer((req, res) => {
     console.log(req.url);
     url = req.url;

     res.statusCode = 200;
     res.setHeader('Content-Type', 'text/html');

     if (req.url == '/') {
          res.end(homePage);
     } else if (req.url == '/aboutPage') {
          res.end(aboutPage);
     } else if (req.url == '/contactPage') {
          res.end(contactPage);
     } else if (req.url == '/servicesPage') {
          res.end(servicesPage);
     } else {
          res.statusCode = 404;
          res.end(notFoundPage);
     }
});

server.listen(port, hostname, () => {
     console.log(`Server running at http://${hostname}:${port}/`);
});
