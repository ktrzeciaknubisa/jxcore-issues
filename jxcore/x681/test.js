// Copyright & License details are available under JXCORE_LICENSE file


var express = require('express');
var app = express();

app.get('/', function (req, res) {
  var n = req.constructor.name;
  if (!n) n = (n === "" ? "empty string" : typeof n);
  res.send('req.constructor.name = ' + n);
});

var server = app.listen(3000, function () {
  console.log('Example app listening at http://%s:%s', server.address().address, 3000);
});
