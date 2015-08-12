
//console.log("test2")




if (process.argv.indexOf("forked") === -1) {

  var cp = require('child_process');

  var n = cp.fork(null, [ "forked"] );

  n.on('exit', function() {
    console.log("child exited");
  });
} else {
  console.log("forked");
}
//var n = cp.fork(__dirname + "/child.js", [ "osiem"], { execPath : "/usr/local/bin/jx" });
