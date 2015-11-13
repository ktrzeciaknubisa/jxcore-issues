// Copyright & License details are available under JXCORE_LICENSE file

var http = require('http');
var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

var server = http.createServer(function (request, response){
  response.end('Request received ' + request.url);
});

server.listen(server_port, server_ip_address, function(){
  console.log("Server listening on: http://%s:%s", server_ip_address, server_port);
});

server.on('error', function(e) {
  console.log(e);
});