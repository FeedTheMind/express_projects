var http = require('http');
// fs (module) allows one to read files from server
var fs = require('fs');
var pug = require('pug');
const PORT = 3000;

var srv = http.createServer((req, res) => {
  if (req.url === '/index') {
    fs.readFile('index.pug', function(err, data) {
      if (err) {
        res.writeHead(404);
        res.write('<h1>Page not found!</h1>');
      } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(pug.renderFile('index.pug'));
      }
      res.end();
    });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>This is the default page.</h1>');
    res.write('<a href="http://localhost:3000/index">Go here?</a>');
    res.end();
  } 
}).listen(PORT, () => {
  console.log(`I'm listening on localhost:${PORT}.`);
});
