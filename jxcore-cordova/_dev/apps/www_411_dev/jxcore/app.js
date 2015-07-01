// Copyright & License details are available under JXCORE_LICENSE file

cordova('log').call("JXcore is up and running! 2");

//var assert = require('assert');
var net = require('net');
//
var kPoolSize = 40 * 1024;
var data = '';
for (var i = 0; i < kPoolSize; ++i) {
  data += 'あ'; // 3bytes
}
//var receivedSize = 0;

var encoding = 'UTF-8';


var srv = require(__dirname + "/srv.js");

//var server = net.createServer(function(socket) {
//  //socket.setEncoding(encoding);
//  //socket.on('data', function(data) {
//  //  receivedSize += data.length;
//  //});
//  //socket.on('end', function() {
//  ///  cordova('log').call("server end() " + receivedSize);
//  //  socket.end();
//  //});
//
//  socket.pipe(socket);

//});

//server.listen(1134);

var s = srv.startSocketServer(1134);

var client = net.createConnection(1134);

client.on('data', function(data){
//  console.log("!!", data.length)
  cordova('log').call("client received " + data.length);
});

client.write(data, encoding);
client.end();


//
//server.listen(1134, function() {
//  var client = net.createConnection(1134);
//client.on('end', function() {
//  server.close();
//});
//
//  // IF YOU DONT ENABLE BELOW, APP WILL RUN FOREVER
//  client.on('data', function(data){
//    //console.log("!!", data.length)
//    cordova('log').call("client received " + data.length);
//  })
//
//  client.write(data, encoding);
//  client.end();
//});

//process.on('exit', function() {
//  assert.equal(receivedSize, kPoolSize);
//});