// Copyright & License details are available under JXCORE_LICENSE file

if (process.threadId >0 )
  return;

//console.log("execPath", process.execPath);

//console.info("argv", process.argv);
var cnt = 0;
for(var o in process.argv) {
  process.stdout.write(cnt + ": " + process.argv[o] + "\n");
  cnt++;
}
console.log("");

var parser = require("./parser.js");
//var parser = jxcore.utils.argv;
var parsed = parser.parse({ x: "sss", internals : [ "autoremove", "cztery" ] });

console.log(JSON.stringify(parsed, null, 4));

console.log("splitBySep", parsed.autoremove.splitBySep());

//console.log(parsed);

//console.info("execArgv", process.execArgv, "threadId", process.threadId);
//console.info("argv", process.argv, "yellow");


//parser.remove("--autoremove");
//jxcore.utils.console.log(process.argv, "yellow");