// Copyright & License details are available under JXCORE_LICENSE file

process.title = "monapp";
var fs = require("fs");
var file = require.main.filename + ".log";

var monitor = require("./monitor.js");

exports.monitor = monitor;

var log = function() {
  var arr = Array.prototype.slice.call(arguments);
  fs.appendFileSync(file, arr.join(" ") + "\n");
  console.log.apply(null, arguments);
};


exports.log = log;

exports.follow = function(cb) {

  monitor.followMe(function (err, txt) {
    if (err) {
      log("Did not subscribed to the monitor: ", txt);
    } else {
      log("Subscribed successfully: ", txt);

      cb();
    }
  }, function (delay) {
    log("Subscribing is delayed by %d ms.", delay);

    setInterval(function(){}, delay + 1000);
  });
};

