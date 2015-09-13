// Copyright & License details are available under JXCORE_LICENSE file

process.title = "monapp";
var fs = require("fs");
var file = __filename + ".log";

var parsed = jxcore.utils.argv.parse();
var monitor = require("./../_dev/monitor.js");

//jxcore.utils.cmdSync(process.execPath + " monitor stop; rm -rf *.log; " + process.execPath + " monitor start");

var log = function() {
  var arr = Array.prototype.slice.call(arguments);
  fs.appendFileSync(file, arr.join(" ") + "\n");
  console.log.apply(null, arguments);
};

//log("process.argv", process.argv);
log("respawned?")
log("pid", process.pid);
log("env", JSON.stringify(process.env, null, 4));

var check = function () {
  monitor.checkPath(__filename, { host1 : "192.168.1.11", host: "localhost", port : 17778 }, function(err, msg) {
    jxcore.utils.console.log("check", msg, err ? "red" : "green");
    //process.exit();
  })

};


monitor.followMe(function (err, txt) {
  if (err) {
    log("Did not subscribed to the monitor: ", txt);
  } else {
    log("Subscribed successfully: ", txt);

      setInterval(check, 1000);
  }
}, function (delay) {
  log("Subscribing is delayed by %d ms.", delay);

  setInterval(function(){}, delay + 1000);
});



