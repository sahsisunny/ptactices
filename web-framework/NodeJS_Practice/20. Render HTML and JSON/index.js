const express = require('express');
const app = express();

app.get('', (req, res) => {
     res.send(`
     <h1>Hello , this is Home Page</h1>
     <a href="/about">About</a>
     `)
});

app.get('/about', (req, res) => {
     res.send(`
     <h1>Hello , this is About Page</h1>
     <a href="/json">Go to JSON Page</a>
     `)
});
app.get('/json', (req, res) => {
     res.send([
          { name: "Rahul Kumar", age: 23 },
          { name: "Sunny Sahsi", age: 23 },
          { name: "Laxman Kumar", age: 26 },
          { name: "Manikant Kumar", age: 25 },
     ])
});

app.get('/printname', (req, res) => {
     res.send(`
     <input type="text" placeholder="Enter Your Name" value="${req.query.name}"/>

     `)
});

app.listen(4500);



// Interview Question
// Q. How to get value from URL Query String or URL Parameters ?
// Ans:  app.get('/products', (req, res) => {
//      if (!req.query.search) {
//           return res.send({
//                error: "You must provide a search term"
//           })
//      }
//      console.log(req.query.search);
//      res.send({
//           products: []
//      })
// });
