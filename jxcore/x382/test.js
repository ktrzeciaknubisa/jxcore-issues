// Copyright & License details are available under JXCORE_LICENSE file

var request = require('request');

request.get({url: "http://google.co.uk"}, function(e, r, b) {
  console.log(b);
});