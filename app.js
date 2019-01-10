var http = require('http');
var port = process.env.PORT || 80;

var server = http.createServer(function (req, res) {
  var command = req.url;
  if (command == '/build') {
  	console.log ('building in Jenkins...');
  } else {
  	console.log ('nothing to be executed for command=' + command);
  }

  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end('{"response":"Jenkins via Google Assistant"}');
});

server.listen(port);

console.log('Server running at http://localhost:'+port+'/');