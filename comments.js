// Create web server
// Create a server that listens on port 3000
// When a request is made to the server, read the comments.json file
// and respond with the contents of the file.
// Start the server with node comments.js
// Test the server with curl http://localhost:3000
// The server should respond with the contents of comments.json

var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'application/json'});
  fs.createReadStream('comments.json').pipe(res);
});

server.listen(3000);
console.log('Server running on http://localhost:3000');