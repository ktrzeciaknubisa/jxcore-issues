var http = require('http');
var express = require('express');

console.log('creating');

var app = express();
var server = http.Server(app);
var io = require('socket.io')(server); // this require creates issue with running the exe

console.log('done');