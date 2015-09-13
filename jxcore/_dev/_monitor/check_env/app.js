// Copyright & License details are available under JXCORE_LICENSE file


var common = require("./../_dev/common.js");
var log = common.log;

var cb = function() {
  log("exiting");
  //process.exit();
  setInterval(function() { log("ok"); }, 1000);
  setTimeout(process.exit, 3000);
};


common.follow(cb);

log("respawned?", common.monitor.respawned);
log("pid", process.pid);
log("argv", process.argv);
log("env", JSON.stringify(process.env, null, 4));



