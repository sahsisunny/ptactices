// Express JS
const express = require('express');     // Importing Express JS module
const app = express();                  // Creating an Express JS application object using express() function

app.get('', (req, res) => {
     res.send("Hello , this is Home Page")
});

app.get('/about', (req, res) => {
     res.send("Hello , this is About us Page")
});
app.get('/help', (req, res) => {
     res.send("Hello , this is Help Page")
});

app.listen(5000);

