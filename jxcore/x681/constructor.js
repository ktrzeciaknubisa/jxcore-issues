// Copyright & License details are available under JXCORE_LICENSE file

var http = require('http');

var req = {
  __proto__: http.IncomingMessage.prototype
};

console.log(req.constructor.name);