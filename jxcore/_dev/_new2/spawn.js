// Copyright & License details are available under JXCORE_LICENSE file

var cp = require("child_process");

var child = cp.spawn(process.execPath, [ __dirname +  "/child.js"]);
child.on('close', function(code) {
  console.log("child closed with code", code);
});
