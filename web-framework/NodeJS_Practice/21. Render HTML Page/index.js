const express = require('express');
const path = require('path');


const app = express();

const publicDirectoryPath = path.join(__dirname, 'public');

app.set('view engine', 'ejs');
app.get('/', (req, res) => {
     res.sendFile(path.join(publicDirectoryPath, 'index.html'));
});

app.get('/about', (req, res) => {
     res.sendFile(path.join(publicDirectoryPath, 'about.html'));
});
app.get('/profile', (req, res) => {
     const user = {
          name: 'Sunny Sahsi',
          age: 21,
          email: 'sahsisunny@gmail.com',
          skills: ['HTML', 'CSS', 'JavaScript', 'NodeJS', 'ExpressJS', 'MongoDB']
     }
     res.render('profile', { user });      // It will serve the profile.ejs file from the views folder
});

// For Login
app.get('/login', (req, res) => {
     res.render('login');
});

app.get('*', (req, res) => {
     res.sendFile(path.join(publicDirectoryPath, '404.html'));
});



app.listen(4500);