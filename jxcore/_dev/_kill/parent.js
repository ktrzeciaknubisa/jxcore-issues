// Copyright & License details are available under JXCORE_LICENSE file

var cp = require("child_process");

var child = cp.spawn(process.execPath, [ "child.js" ], {});
child.unref();
console.log("from parent, child pid:", child.pid);


setTimeout(function() {
  child.kill();
}, 3000);