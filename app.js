var http = require('http');
var port = process.env.PORT || 80;

var server = http.createServer(function (req, res) {
  var command = req.url;
  if (command == '/build') {
  	console.log ('building in Jenkins...');
  } else {
  	console.log ('nothing to be executed for command=' + command);
  }

  //notifying clients
  io.emit('build');

  res.writeHead(200, {'Content-Type': 'application/json'});
  //res.end('{"response":"Jenkins via Google Assistant"}');
  var objToJson = {
	  "payload": {
	    "google": {
	      "expectUserResponse": false,
	      "richResponse": {
	        "items": [
	          {
	            "simpleResponse": {
	              "textToSpeech": "Ok, I am sending your request to jenkins right now. You'll receive a message when it is done."
	            }
	          }
	        ]
	      }
	    }
	  }
	};

  res.end(JSON.stringify(objToJson));
});

server.listen(port);
var io = require('socket.io').listen(server);
io.on('connection', function(socket) {
  console.log('client has connected.');
  socket.on('disconnect', function(){
    console.log('client has disconnected.');
  })
})

console.log('Server running at http://localhost:'+port+'/');
