# Express JS

#### What is Express JS?
- Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
- Express provides a thin layer of fundamental web application features, without obscuring Node.js features that you know and love.
- Express is the de facto standard server framework for Node.js.

# Request in Express JS
- The request object represents the HTTP request and has properties for the request query string, parameters, body, HTTP headers, and so on.
- The request object is an instance of the IncomingMessage class and the ClientRequest class.
- The request object is created automatically when the client requests to the server and passed as an argument to the callback function.

#### GET Request
- GET is used to request data from a specified resource.
- GET is one of the most common HTTP methods.
- GET requests can be cached
- GET requests remain in the browser history
- GET requests can be bookmarked
- GET requests should never be used when dealing with sensitive data
- GET requests have length restrictions
- GET requests are only used to request data (not modify)

- Example
```js
app.get('/', (req, res) => {
    res.send('Hello World!');
});
```

#### POST Request
- POST is used to send data to a server to create/update a resource.
- POST is one of the most common HTTP methods.
- POST requests are never cached
- POST requests do not remain in the browser history
- POST requests cannot be bookmarked
- POST requests have no restrictions on data length

- Example
```js
app.post('/', (req, res) => {
    res.send('Hello World!');
});
```

#### PUT Request
- PUT is used to send data to a server to create/update a resource.
- PUT is one of the most common HTTP methods.
- PUT requests are never cached
- PUT requests do not remain in the browser history
- PUT requests cannot be bookmarked
- PUT requests have no restrictions on data length

- Example
```js
app.put('/', (req, res) => {
    res.send('Hello World!');
});
```

#### DELETE Request
- DELETE is used to delete data from a server.
- DELETE is one of the most common HTTP methods.
- DELETE requests are never cached
- DELETE requests do not remain in the browser history
- DELETE requests cannot be bookmarked
- DELETE requests have no restrictions on data length

- Example
```js
app.delete('/', (req, res) => {
    res.send('Hello World!');
});
```

# Response in Express JS
- The response object represents the HTTP response that an Express app sends when it gets an HTTP request.
- The response object is an instance of the ServerResponse class.
- The response object is created by the web server automatically and passed as the second argument to the callback function.

#### Send Response
- The send() method of the response object is used to send the HTTP response.
- The send() method takes one argument, the content of the response body.
- The send() method sets the Content-Type response HTTP header field based on the type of the argument.
- The send() method sets the HTTP status for the response.
- The send() method can be used to send any type of HTTP response body.

- Example
```js
app.get('/', (req, res) => {
    res.send('Hello World!');
});
```

#### Send HTML Response
- The send() method can be used to send HTML response.
- The send() method sets the Content-Type response HTTP header field to text/html.

- Example
```js
app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>');
});
```

#### Send JSON Response
- The send() method can be used to send JSON response.
- The send() method sets the Content-Type response HTTP header field to application/json.

- Example
```js
app.get('/', (req, res) => {
    res.send({name: 'John', age: 30});
});
```

#### Send File Response
- The sendFile() method of the response object is used to send the HTTP response with the contents of a file.
- The sendFile() method takes one argument, the path of the file to be sent.
- The sendFile() method sets the Content-Type response HTTP header field based on the file type.
- The sendFile() method sets the HTTP status for the response.
- The sendFile() method can be used to send any type of HTTP response body.

- Example
```js
app.get('/', (req, res) => {
    res.sendFile('index.html', {root: __dirname});
});
```

#### Send Status Response
- The status() method of the response object is used to set the HTTP status for the response.
- The status() method takes one argument, the status code.
- The status() method sets the HTTP status for the response.
- The status() method can be used to send any type of HTTP response body.

- Example
```js
app.get('/', (req, res) => {
    res.status(404).send('Not Found');
});
```

# Middleware in Express JS
- Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle.
- The next middleware function is commonly denoted by a variable named next.
- Middleware functions can perform the following tasks:
    - Execute any code.
    - Make changes to the request and the response objects.
    - End the request-response cycle.
    - Call the next middleware function in the stack.
- If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging.

#### Application-Level Middleware
- Application-level middleware is bound to an instance of the app object by using the app.use() and app.METHOD() functions, where METHOD is the HTTP method of the request that the middleware function handles (such as GET, PUT, or POST) in lowercase.
- Application-level middleware functions are executed when the app object receives a request.
- If an application-level middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging.

- Example
```js
app.use((req, res, next) => {
    console.log('Time:', Date.now());
    next();
});
```

#### Router-Level Middleware
- Router-level middleware works in the same way as application-level middleware, except it is bound to an instance of express.Router().
- You can create modular, mountable route handlers, a.k.a. routers, with the express.Router class.
- A Router instance is a complete middleware and routing system; for this reason, it is often referred to as a “mini-app”.

- Example
```js
const router = express.Router();

router.use((req, res, next) => {
    console.log('Time:', Date.now());
    next();
});

router.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/user', router);
```

#### Error Handling Middleware
- Error-handling middleware always takes four arguments. You must provide four arguments to identify it as an error-handling middleware function. Even if you don’t need to use the next object, you must specify it to maintain the signature. Otherwise, the next object will be interpreted as regular middleware and will fail to handle errors.

- Example
```js
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
```

#### Built-in Middleware
- Express provides a few built-in middleware functions that can be used to serve static files and set various HTTP headers.
- The express.static built-in middleware function in Express is used to serve static files such as images, CSS files, and JavaScript files.
- The function signature is:
```js
express.static(root, [options])
```
- The root argument specifies the root directory from which to serve static assets.
- The options argument is an object that contains options for serving static files.

- Example
```js
app.use(express.static('public'));
```

#### Third-party Middleware
- Third-party middleware functions are functions that are not built into Express but are available as separate packages.
- Third-party middleware functions are installed using the npm install command.
- Third-party middleware functions are executed when the app object receives a request.

- Example
```js
const bodyParser = require('body-parser');

app.use(bodyParser.json());
```

# Routing in Express JS
- Routing refers to how an application’s endpoints (URIs) respond to client requests.
- For an introduction to routing, see Basic routing.
- Routing methods specify a callback function (sometimes called “handler functions”) called when the application receives a request to the specified route (endpoint) and HTTP method.
- If the route and HTTP method match, the specified callback function is called.

#### Route Methods
- The following methods of the app object are used to handle routing requests:
    - app.all()
    - app.get()
    - app.post()
    - app.put()
    - app.delete()
    - app.use()
    - app.route()
- The app.all() method is used to load middleware functions at a path for all HTTP request methods.
- The app.get() method is used to handle GET requests to the specified path with the specified callback function.
- The app.post() method is used to handle POST requests to the specified path with the specified callback function.
- The app.put() method is used to handle PUT requests to the specified path with the specified callback function.
- The app.delete() method is used to handle DELETE requests to the specified path with the specified callback function.
- The app.use() method is used to mount the specified middleware function or functions at the specified path.
- The app.route() method creates a new route object for the specified path.

- Example
```js
app.get('/', (req, res) => {
    res.send('Hello World!');
});
```

#### Route Paths
- Route paths, in combination with a request method, define the endpoints at which requests can be made.
- Route paths can be strings, string patterns, or regular expressions.
- The characters ?, +, *, and () are subsets of their regular expression counterparts. The hyphen (-) and the dot (.) are interpreted literally by string-based paths.
- String-based paths are treated as literals, and will match to the path exactly.
- String patterns are interpreted as a string containing zero or more characters, where * is replaced with a string of one or more characters, and ? is replaced with a single character.
- Regular expressions are used to match paths by pattern.
- The following characters are reserved in regular expressions and must be escaped with a backslash (\) to be used in a regular expression: ^$.*+-?=!:|\/()[]{}.

- Example
```js
app.get('/ab?cd', (req, res) => {
    res.send('ab?cd');
});

app.get('/ab+cd', (req, res) => {
    res.send('ab+cd');
});

app.get('/ab*cd', (req, res) => {
    res.send('ab*cd');
});

app.get('/ab(cd)?e', (req, res) => {
    res.send('ab(cd)?e');
});

app.get(/a/, (req, res) => {
    res.send('/a/');
});

app.get(/.*fly$/, (req, res) => {
    res.send('/.*fly$/');
});
```

#### Route Parameters
- Route parameters are named URL segments that are used to capture the values specified at their position in the URL. The captured values are populated in the req.params object, with the name of the route parameter specified in the path as their respective keys.

- Example
```js
app.get('/users/:userId/books/:bookId', (req, res) => {
    res.send(req.params);
});
```

#### Route Handlers
- Route handlers define the actual functions executed when the route is matched.
- You can provide multiple callback functions that behave like middleware to handle a request. The only exception is that these callbacks might invoke next('route') to bypass the remaining route callbacks. You can use this mechanism to impose pre-conditions on a route, then pass control to subsequent routes if there’s no reason to proceed with the current route.

- Example
```js
app.get('/example/a', (req, res) => {
    res.send('Hello from A!');
});

app.get('/example/b', (req, res, next) => {
    console.log('the response will be sent by the next function ...');
    next();
}, (req, res) => {
    res.send('Hello from B!');
});
```

#### Response Methods
- The methods on the response object (res) in the following table can send a response to the client, and terminate the request-response cycle. If none of these methods are called from a route handler, the client request will be left hanging.

- Example
```js
app.get('/', (req, res) => {
    res.download('./report-12345.pdf');
});

app.get('/', (req, res) => {
    res.end();
});

app.get('/', (req, res) => {
    res.json({ user: 'tobi' });
});

app.get('/', (req, res) => {
    res.jsonp({ user: 'tobi' });
});

app.get('/', (req, res) => {
    res.redirect('/login');
});

app.get('/', (req, res) => {
    res.render('index', { title: 'Hey', message: 'Hello there!' });
});

app.get('/', (req, res) => {
    res.send(new Buffer('whoop'));
});

app.get('/', (req, res) => {
    res.send({ some: 'json' });
});

app.get('/', (req, res) => {
    res.send('<p>some html</p>');
});

app.get('/', (req, res) => {
    res.sendFile('/path/to/index.html');
});

app.get('/', (req, res) => {
    res.sendStatus(200);
});
```

#### Express Router
- The Express router is a class which helps you create modular, mountable route handlers. A Router instance is a complete middleware and routing system; for this reason, it is often referred to as a “mini-app”.

- Example
```js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Birds home page');
});

router.get('/about', (req, res) => {
    res.send('About birds');
});

module.exports = router;
```

#### Express Middleware
- Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.
- If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging.

- Example
```js
const express = require('express');
const app = express();

const myLogger = (req, res, next) => {
    console.log('LOGGED');
    next();
};

const requestTime = (req, res, next) => {
    req.requestTime = Date.now();
    next();
};

app.use(myLogger);
app.use(requestTime);

app.get('/', (req, res) => {
    const responseText = 'Hello World!<br>';
    responseText += '<small>Requested at: ' + req.requestTime + '</small>';
    res.send(responseText);
});

app.listen(3000);
```

#### Express Error Handling
- Error-handling middleware always takes four arguments. You must provide four arguments to identify it as an error-handling middleware function. Even if you don’t need to use the next object, you must specify it to maintain the signature. Otherwise, the next object will be interpreted as regular middleware and will fail to handle errors.

- Example
```js
const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
    fs.readFile('/file-does-not-exist', (err, data) => {
        if (err) {
            next(err); // Pass errors to Express.
        } else {
            res.send(data);
        }
    });
});

// Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(3000);
```

#### Express Generator
- The express-generator package provides a utility to quickly create an application skeleton. Install the package globally with the following command:

```bash
$ npm install express-generator -g
```

- Create the app:

```bash
$ express --view=pug myapp
```

- Install dependencies:

```bash
$ cd myapp
$ npm install
```

- Start the server:

```bash
$ npm start
```

#### Express Generator - EJS
- EJS is a simple templating language that lets you generate HTML markup with plain JavaScript. No religiousness about how to organize things. No reinvention of iteration and control-flow. It's just plain JavaScript.

- Example
```js
<% if (user) { %>
    <h2><%= user.name %></h2>
<% } %>
```

#### Express Generator - Pug
- Pug is a high performance template engine heavily influenced by Haml and implemented with JavaScript for Node.js and browsers. Pug is available via npm:

```bash
$ npm install pug
```

- Example
```js

doctype html
html
    head
        title= title
        link(rel='stylesheet', href='/stylesheets/style.css')
    body
        block content
```

#### Express Generator - Jade



# REST API
- REST (REpresentational State Transfer) is an architectural style for providing standards between computer systems on the web, making it easier for systems to communicate with each other. REST-compliant systems, often called RESTful systems, are characterized by how they are stateless and separate the concerns of client and server.
- RESTful web services allow the requesting systems to access and manipulate textual representations of web resources by using a uniform and predefined set of stateless operations. These operations are called methods.
- RESTful web services usually use data formats such as JSON or XML for transferring data.
- RESTful web services are independent of any underlying protocol and are simple to implement. They are lightweight and help in improving performance of web applications.
- RESTful web services are stateless. Each request from client to server must contain all of the information necessary to understand the request, and cannot take advantage of any stored context on the server. Session state is therefore kept entirely on the client.
- RESTful web services are cacheable. Cache constraints require that the data within a response to a request be implicitly or explicitly labeled as cacheable or non-cacheable. If a response is cacheable, then a client cache is given the right to reuse that response data for later, equivalent requests.

#### REST API - HTTP Methods
- The HTTP methods are used to define the action to be performed on the identified resource. The methods are case-sensitive.
- The following table lists the HTTP methods that are supported by RESTful web services.

| Method | Description |
| --- | --- |
| GET | The GET method requests a representation of the specified resource. Requests using GET should only retrieve data. |
| POST | The POST method is used to submit an entity to the specified resource, often causing a change in state or side effects on the server. |
| PUT | The PUT method replaces all current representations of the target resource with the request payload. |
| DELETE | The DELETE method deletes the specified resource. |
| HEAD | The HEAD method asks for a response identical to that of a GET request, but without the response body. |
| OPTIONS | The OPTIONS method is used to describe the communication options for the target resource. |
| PATCH | The PATCH method is used to apply partial modifications to a resource. |

#### REST API - HTTP Status Codes
- The HTTP status codes indicate whether a specific HTTP request has been successfully completed. Responses are grouped in five classes:
- Informational responses (100–199)
- Successful responses (200–299)
- Redirects (300–399)
- Client errors (400–499)
- Server errors (500–599)

#### REST API - HTTP Status Codes - 1xx Informational responses
- This class of status code indicates a provisional response, consisting only of the Status-Line and optional headers, and is terminated by an empty line. Since HTTP/1.0 did not define any 1xx status codes, servers MUST NOT send a 1xx response to an HTTP/1.0 client except under experimental conditions.

| Code | Description |
| --- | --- |
| 100 | Continue |
| 101 | Switching Protocols |
| 102 | Processing (WebDAV) |

#### REST API - HTTP Status Codes - 2xx Successful responses
- This class of status code indicates that the client's request was successfully received, understood, and accepted.

| Code | Description |
| --- | --- |
| 200 | OK |
| 201 | Created |
| 202 | Accepted |
| 203 | Non-Authoritative Information (since HTTP/1.1) |
| 204 | No Content |
| 205 | Reset Content |
| 206 | Partial Content |
| 207 | Multi-Status (WebDAV) |
| 208 | Already Reported (WebDAV) |
| 226 | IM Used |

#### REST API - HTTP Status Codes - 3xx Redirection messages
- This class of status code indicates that further action needs to be taken by the user agent in order to fulfill the request. The action required MAY be carried out by the user agent without interaction with the user if and only if the method used in the second request is GET or HEAD. A client SHOULD detect infinite redirection loops, since such loops generate network traffic for each redirection.

| Code | Description |
| --- | --- |
| 300 | Multiple Choices |
| 301 | Moved Permanently |
| 302 | Found |
| 303 | See Other (since HTTP/1.1) |
| 304 | Not Modified (RFC 7232) |
| 305 | Use Proxy (since HTTP/1.1) |
| 306 | Switch Proxy |
| 307 | Temporary Redirect (since HTTP/1.1) |

#### REST API - HTTP Status Codes - 4xx Client errors
- The 4xx class of status code is intended for cases in which the client seems to have erred. Except when responding to a HEAD request, the server SHOULD include an entity containing an explanation of the error situation, and whether it is a temporary or permanent condition. These status codes are applicable to any request method. User agents SHOULD display any included entity to the user.

| Code | Description |
| --- | --- |
| 400 | Bad Request |
| 401 | Unauthorized (RFC 7235) |
| 402 | Payment Required |
| 403 | Forbidden |
| 404 | Not Found |
| 405 | Method Not Allowed |
| 406 | Not Acceptable |
| 407 | Proxy Authentication Required (RFC 7235) |
| 408 | Request Timeout |
| 409 | Conflict |
| 410 | Gone |
| 411 | Length Required |
| 412 | Precondition Failed (RFC 7232) |
| 413 | Payload Too Large (RFC 7231) |
| 414 | URI Too Long (RFC 7231) |
| 415 | Unsupported Media Type |

#### REST API - HTTP Status Codes - 5xx Server errors
- Response status codes beginning with the digit "5" indicate cases in which the server is aware that it has erred or is incapable of performing the request. Except when responding to a HEAD request, the server SHOULD include an entity containing an explanation of the error situation, and whether it is a temporary or permanent condition. User agents SHOULD display any included entity to the user. These response codes are applicable to any request method.

| Code | Description |
| --- | --- |
| 500 | Internal Server Error |
| 501 | Not Implemented |
| 502 | Bad Gateway |
| 503 | Service Unavailable |
| 504 | Gateway Timeout |
| 505 | HTTP Version Not Supported |

## Create REST API
- Create a new project
```bash
$ mkdir rest-api
$ cd rest-api
$ npm init
```

- Install dependencies
```bash
$ npm install express --save
$ npm install body-parser --save
$ npm install morgan --save
$ npm install mongoose --save
```

- Create a new file `server.js`
```javascript
// server.js

// BASE SETUP
// =============================================================================
// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var morgan     = require('morgan');
var mongoose   = require('mongoose');

// configure app
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// configure morgan
app.use(morgan('dev'));

// configure mongoose
mongoose.connect('mongodb://localhost:27017/rest-api');

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------

// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(8080);
console.log('Magic happens on port 8080');
```

- Run the server
```bash
$ node server.js
```

- Test the server
```bash
$ curl http://localhost:8080/api
```

## Create REST API - Create a new model
- Create a new file `models/bear.js`
```javascript
// models/bear.js

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var BearSchema   = new Schema({
    name: String
});

module.exports = mongoose.model('Bear', BearSchema);
```

