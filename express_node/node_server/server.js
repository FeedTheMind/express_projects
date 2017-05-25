// With PHP, you use Apache. With Node, you create your own server.

// const keyword is block-scoped and cannot change through reassignment (and cannot be redeclared)
const http = require('http');

var onRequest = function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello, World!');
  res.end();
};

// http.createServer takes a callback function
  // You can create an anonymous one or define a function (above)
    // Defining a function will make the code easier to interpret, given the situation
var server = http.createServer(onRequest).listen(3000, () => {
  console.log('Listening on localhost:3000');
});
