var http = require('http'); // This is a core module of Node(js)
// The variable (http) allows you access to the methods and properties of the http module
var firstModule = require('./firstModule'); // Custom module
var secondModule = require('./secondModule'); // Custom module, 2

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<h1 style="font-family: Georgia;">' + firstModule.aString + '</h1>');
  // This is a template literal (notice ``, not '')
    // Less verbose than standard method (above)
      // However, not all browsers support ES6
        // Website to check: http://caniuse.com/#feat=template-literals
  res.write(`<h2 style="font-family: Georgia;">${secondModule.myVariable}</h2>`);
  firstModule.awesomeFunction();
  secondModule.anotherFunc();
  res.end();
}).listen(7777, function () {
  console.log('I am listening on localhost:7777');
});
