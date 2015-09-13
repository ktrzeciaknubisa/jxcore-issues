// Copyright & License details are available under JXCORE_LICENSE file

process.title = "monapp";
var fs = require("fs");
var file = __filename + ".log";

var log = function() {
  var arr = Array.prototype.slice.call(arguments);
  fs.appendFileSync(file, arr.join(" ") + "\n");
  console.log.apply(null, arguments);
};

log("process.argv", process.argv);

setInterval(function() {
  log("test");
}, 10000);



if (process.argv.toString().indexOf("xxx") !== -1) {
  log("attaching sigterm", process.pid);
  process.on('SIGTERM', function() {
    // ignore
  });
}