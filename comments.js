// Create Web Server

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

// Run the server
// node comments.js
// Open browser and go to http://localhost:3000
// You should see 'Hello World' on the page

// Express has a middleware system, which allows you to extend the functionality of the server

// Middleware is a function that takes three arguments: request, response, and next
// Middleware can modify the request and response objects, and it can end the request-response cycle

// Path: comments.js
// Middleware Function
// Middleware functions are executed sequentially in the order they are added to the application

const express = require('express');
const app = express();
const port = 3000;

// Middleware Function
app.use((req, res, next) => {
  console.log('Time:', Date.now());
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

// Run the server
// node comments.js
// Open browser and go to http://localhost:3000
// You should see the current date and time in the console

// Path: comments.js
// Middleware Function
// Middleware functions can also modify the request and response objects

const express = require('express');
const app = express();
const port = 3000;

// Middleware Function
app.use((req, res, next) => {
  req.user = 'John Doe';
  next();
});

app.get('/', (req, res) => {
  res.send(`Hello ${req.user}`);
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

// Run the server
// node comments.js
// Open browser and go to http://localhost:3000
// You should see 'Hello John Doe' on the page

// Path: comments.js
// Middleware Function
// Middleware functions can also end the request-response cycle

const express = require('express');
const app = express();
const port = 3000;

// Middleware Function
app.use((req, res, next) => {
  res.send('Hello World');
});

app.get