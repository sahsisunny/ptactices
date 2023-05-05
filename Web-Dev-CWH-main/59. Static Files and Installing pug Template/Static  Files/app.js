const express = require('express');

const app = express();
const port = 80;

// GET method route
app.get('/', (req, res) => {
     res.send('This is the Home Page');
});

app.get('/about', (req, res) => {
     res.send('This is the About Page');
});

app.get('/contact', (req, res) => {
     res.send('This is the Contact Page');
});

// POST method route
app.post('/contact', (req, res) => {
     res.send('This is the Post Request');
});

// 404 Page
app.use((req, res) => {
     res.status(404).send('404 Page Not Found');
});



// Static Files
app.use('/static', (express.static('static')));



app.listen(port, () => console.log(`Listening on port ${port}`));

