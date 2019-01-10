var socket = require('socket.io-client')('https://jenkinsassistant.herokuapp.com/');//('http://localhost:8080');
socket.on('connect', function(){
  console.log('connected to server')
});

socket.on('build', function(data){
  console.log('build ...')

  const https = require('https');

  https.get('https://google.com/', (resp) => {
    let data = '';

    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
      data += chunk;
      console.log(data);
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      console.log(JSON.parse(data).explanation);
    });

  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });

});

socket.on('disconnect', function(){
  console.log('connection close')
});
