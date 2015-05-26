//
// OS: Windows 7 x64 SP 1
// JXcore: Beta 2.3.4
//
// To reproduce:
//    npm install
//    jx sock.js # works fine
//    jx package sock.js issue115 -native -slim node_modules
//    .\issue115.exe # exits after the console.log on line 23
//
var webroot = '/wwwroot';
var portNum = 3400;


var express = require('express');
var app = module.exports = express();
var server = require('http').createServer(app);

app.use(express.static(__dirname + webroot));

//
// https://github.com/Nubisa/jxdocs/issues/115
//
console.log("require('socket.io') call is next...");
var io = require('socket.io').listen(server);
console.log("... finished require('socket.io') call");

//
// Start the express web server
//
server.listen(portNum, function () {
    "use strict";
    console.log("Express server listening on port %d", this.address().port);
});