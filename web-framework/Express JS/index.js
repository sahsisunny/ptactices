const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const publicPath = path.join(__dirname, 'public');

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';

// const homePage = fs.readFileSync(path.join(publicPath, 'index.html'), 'utf8');
// const aboutPage = fs.readFileSync(path.join(publicPath, 'about.html'), 'utf8');
// const contactPage = fs.readFileSync(path.join(publicPath, 'contact.html'), 'utf8');
const notFoundPage = fs.readFileSync(path.join(publicPath, '404.html'), 'utf8');
// const loginPage = fs.readFileSync(path.join(publicPath, 'login.html'), 'utf8');

app.use(bodyParser.urlencoded({ extended: false }));
/*
app.get('/', (req, res) => {
     res.send(homePage);
});

app.get('/about', (req, res) => {
     res.send(aboutPage);
});

app.get('/contact', (req, res) => {
     res.send(contactPage);
});

app.get('/login', (req, res) => {
     res.send(loginPage);
});
*/

app.get('/', (req, res) => {
     res.sendFile(path.join(publicPath, 'login.html'));
});

app.post('/api/v1/userData', (req, res) => {
     res.json(req.body);
     
});

app.get('*', (req, res) => {
     res.send(notFoundPage);
});
app.listen(PORT, HOST, () => {
     console.log(`Server listening on ${HOST}:${PORT}`);
});