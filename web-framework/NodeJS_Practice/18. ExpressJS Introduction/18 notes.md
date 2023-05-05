# Express JS Introduction

- Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
- Express is the de facto standard server framework for Node.js.
- It is very simple to use and it is very flexible.
- It is very popular and it is very easy to learn.
- It is very easy to get started with Express.

## Example

```js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
```

### ExpressJS vs. NodeJS

| NodeJS | ExpressJS |
| --- | --- |
| NodeJS is a runtime environment for executing JavaScript code. | ExpressJS is a web application framework for NodeJS. |
| NodeJS is a low-level platform. | ExpressJS is a high-level platform. |
| NodeJS is a standalone framework. | ExpressJS is a framework built on top of NodeJS. |

### ExpressJS Features

- Allows to set up middlewares to respond to HTTP Requests.
- Defines a routing table which is used to perform different actions based on HTTP Method and URL.
- Allows to dynamically render HTML Pages based on passing arguments to templates.
- It is very easy to use.
- It is very flexible.
- It is very popular.
- It is very easy to learn.
- It is very easy to get started with Express.

#### Some most used ExpressJS methods

1. app.get()   - is is used to handle GET requests. It takes two arguments, the first is the path and the second is the callback function.
2. app.post()  - is is used to handle POST requests. It takes two arguments, the first is the path and the second is the callback function.
3. app.put()   - is is used to handle PUT requests. It takes two arguments, the first is the path and the second is the callback function.
4. app.delete() - is is used to handle DELETE requests. It takes two arguments, the first is the path and the second is the callback function.
5. app.all()   - is is used to handle all HTTP requests. It takes two arguments, the first is the path and the second is the callback function.
