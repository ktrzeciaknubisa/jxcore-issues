// Copyright & License details are available under JXCORE_LICENSE file

var cp = require("child_process");



var child = cp.spawn(process.execPath, [ __dirname +  "/spawn.jx"]);
child.on('close', function(code) {
  console.log("child closed with code", code);
  process.exit(code);
});

jxcore.utils.jump();