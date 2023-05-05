# NodeJS

#### What is NodeJS?
- NodeJS is a JavaScript runtime built on Chrome's V8 JavaScript engine.
- NodeJS is an event-based, non-blocking, asynchronous I/O runtime that uses Google's V8 JavaScript engine and libuv library.
- NodeJS is used to build fast and scalable network applications.

#### What is NodeJS used for?
- NodeJS is used for traditional web sites and back-end API services, but was designed with real-time, push-based architectures in mind.
- NodeJS is used for building fast and scalable network applications.

#### Structure of NodeJS
- NodeJS is a single-threaded application, but it can support concurrency via the concept of event and callbacks.
- Example
```js
const fs = require('fs');

fs.readFile('input.txt', (err, data) => {
  if (err) return console.error(err);
  console.log(data.toString());
});

console.log("Program Ended");
```

# Type of execution in NodeJS
1. Synchronous or Blocking execution
2. Asynchronous or Non-Blocking execution

#### Synchronous or Blocking execution
- Synchronous or Blocking execution is a type of execution in which each line of code is executed one after another.
- Example
```js
const fs = require('fs');
const data = fs.readFileSync('input.txt');
console.log(data.toString());
console.log("Program Ended");
```

#### Asynchronous or Non-Blocking execution
- Asynchronous or Non-Blocking execution is a type of execution in which each line of code is executed one after another, but if any line of code is taking more time to execute, then it will not wait for that line of code to complete its execution and move to the next line of code.
- Example
```js
const fs = require('fs');
fs.readFile('input.txt', (err, data) => {
  if (err) return console.error(err);
  console.log(data.toString());
});
console.log("Program Ended");
```

# Core Modules in NodeJS
- Core modules are the modules which are provided by NodeJS itself.
