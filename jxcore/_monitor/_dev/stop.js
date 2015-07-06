// Copyright & License details are available under JXCORE_LICENSE file


var monitor = require("./monitor.js");

monitor.stopMonitor(function(err, txt) {
  console.log("stop callback\nerr =", err, "\ntxt =", txt);
});