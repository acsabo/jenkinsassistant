var http = require('http');
var port = port = process.env.PORT || 80;

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Node.JS!');
}).listen(port);
console.log('Server running at http://localhost:8080/');