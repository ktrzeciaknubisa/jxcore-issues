// Copyright & License details are available under JXCORE_LICENSE file

if (process.isPackaged)
  return;

var http = require("http"),
  fs = require('fs'),
  path = require("path"),
  childprocess = require("child_process"),
  assert = require('assert');


// monitored app will just create an http server
var baseFileName = "__test-monitor-run-app-tmp.js";
var logFileName = "__test-monitor-run-app-tmp-monitor.log";
var appFileName = __dirname + path.sep + baseFileName;

var str = 'require("http").createServer().listen(8587, "localhost");\n';
str += 'setTimeout(process.exit, 100000);';  // let it end after 10 secs
fs.writeFileSync(appFileName, str);

var cmd = '"' + process.execPath + '" monitor ';

// kill monitor if it stays as dummy process
jxcore.utils.cmdSync(cmd + "stop");


// this should be launched in background. & at the end of cmd does not work proper on windows
var out = fs.openSync(logFileName, 'a');
var err = fs.openSync(logFileName, 'a');


var child = childprocess.spawn(process.execPath, [] , { detached: true, stdio: [ 'ignore', out, err ] });
//var child = childprocess.spawn(batchName, { detached: true, stdio: [ 'ignore', out, err ] });
child.unref();

console.log("ok");
var start = Date.now();

process.exit();
var check = function() {
  getJSON(function (err, txt) {

    // should be no error and json should be returned with subscribed application data
    // including "pid" number
    if (!err && txt && txt.length && txt.indexOf(baseFileName) > -1) {
      subscribed = true;
      console.log("subscribed");
      // app subscribed to the monitor
      var ret = jxcore.utils.cmdSync(cmd + "kill " + appFileName);
      jxcore.utils.console.info(cmd + "kill " + appFileName);
      jxcore.utils.console.warn(ret);

      getJSON(function (err, txt) {
        // should be no error and json should be returned with only []
        if (!err && txt === "[]") {
          console.log("killed");
          killed = true;
        }
        finished = true;
      });

      return;
    }

    if (Date.now() - start < 20000)
      setTimeout(check, 1000);
    else
      finished = true;
  });
};

check();

