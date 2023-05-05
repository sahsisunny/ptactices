const express = require('express');
const app = express();

// Middleware
const reqFilter = (req, res, next) => {
     console.log('Request Filter');
     next();        // next() is used to call the next middleware
}

app.get('/', (req, res) => {
     res.send('Hello World');
});

app.get('/users', (req, res) => {
     res.send('Hello Users');
});

app.listen(3000, () => console.log('Listening on port 3000'));