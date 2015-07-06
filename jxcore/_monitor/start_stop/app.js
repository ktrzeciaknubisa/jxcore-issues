// Copyright & License details are available under JXCORE_LICENSE file


var common = require("./../_dev/common.js");
var log = common.log;

var cb = function() {
  setInterval(function() { log("ok"); }, 1000);
};


common.follow(cb);



