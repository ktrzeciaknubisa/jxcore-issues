// Copyright & License details are available under JXCORE_LICENSE file

var assert = require('assert');
var net = require('net');

var kPoolSize = 40 * 1024;
var data = '';
for (var i = 0; i < kPoolSize; ++i) {
  data += 'あ'; // 3bytes
}
var receivedSize = 0;
var encoding = 'UTF-8';
//
//var server = net.createServer(function(socket) {
//  socket.setEncoding(encoding);
//  socket.on('data', function(data) {
//    receivedSize += data.length;
//  });
//  socket.on('end', function() {
//    socket.end();
//  });
//
//  socket.pipe(socket);
//
//});

server.listen(1134, function() {
  var client = net.createConnection(1134);
  client.on('end', function() {
    server.close();
  });

  // IF YOU DONT ENABLE BELOW, APP WILL RUN FOREVER
  //client.on('data', function(data){
  //  console.log("!!", data.length)
  //})

  client.write(data, encoding);
  client.end();
});





process.on('exit', function() {
  assert.equal(receivedSize, kPoolSize);
});