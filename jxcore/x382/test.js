// Copyright & License details are available under JXCORE_LICENSE file

var request = require('request');
var path = require('path');



request.get({url: "http://google.co.uk"}, function(e, r, b) {
  console.log(b);
});

getMemContent = function (location) {
  var data = new Buffer($uw.readSource(location), 'base64');
  var str = data.toString();
  data = null;

  return str;
};

//var f = path.join(__dirname , "node_modules/request/request.js.jx");
//console.log("filename", f);
//var $uw = process.binding("memory_wrap");
//jxcore.utils.console.info("file",getMemContent("@" + f));