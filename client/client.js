var socket = require('socket.io-client')('http://localhost:8080');
socket.on('connect', function(){
  console.log('connected to server')
});

socket.on('build', function(data){
  console.log('build ...')
});

socket.on('disconnect', function(){
  console.log('connection close')
});
