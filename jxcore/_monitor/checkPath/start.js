// Copyright & License details are available under JXCORE_LICENSE file


var monitor = require("./monitor.js");

monitor.startMonitor(function(err, txt) {
  console.log("start callback\nerr =", err, "\ntxt =", txt);
});