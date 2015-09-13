// Copyright & License details are available under JXCORE_LICENSE file

if (process.isPackaged)
  return;

var http = require("http"),
  fs = require('fs'),
  path = require("path"),
  childprocess = require("child_process"),
  assert = require('assert');
  //jxtools = require("jxtools");
//
//jxtools.listenForSignals();

var port = 17777;
var finished = false;
var subscribed = false;
var killed = false;

process.title  = "jx_test";

// neutralize old tmp file
var oldLog = path.join(__dirname, "test-monitor-run-app-tmp.js");
if (fs.existsSync(oldLog))
  fs.writeFileSync(oldLog, "");

// monitored app will just create an http server
var baseFileName = "__test-monitor-run-app-tmp.js";
var logFileName = "__test-monitor-run-app-tmp-monitor.log";
var appFileName = __dirname + path.sep + baseFileName;

var str = 'process.title = "jx_app"; require("http").createServer().listen(8587, "localhost");\n';
str += 'setTimeout(process.exit, 100000); console.log("ok pid", process.pid);';  // let it end after 10 secs
fs.writeFileSync(appFileName, str);

var cmd = '"' + process.execPath + '" monitor ';

// kill monitor if it stays as dummy process
//jxcore.utils.cmdSync(cmd + "stop");

process.on('exit', function (code) {
  //jxcore.utils.cmdSync(cmd + 'stop');
  //jxtools.rmfilesSync("*monitor*.log");
  //if (fs.existsSync(appFileName))
  //  fs.unlinkSync(appFileName);

  //if (!jxtools.gotSignal) {
  //  assert.ok(finished, "Test unit did not finish.");
  //  assert.ok(subscribed, "Application did not subscribe to a monitor with `jx monitor run` command.");
  //  assert.ok(killed, "Application was not killed with `jx monitor kill` command.");
  //}
});

// calls monitor and gets json: http://localhost:17777/json
var getJSON = function (cb) {
  var options = {
    host: 'localhost',
    port: port,
    path: '/json'
  };

  http.get(options, function (res) {
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
      cb(false, chunk.toString());
    });
  })
    .on("error", function (err) {
      cb(true, err);
    });
};


// we use setTimeout() here, because we cannot be sure on Windows,
// that cmdSync will not exit sooner that jx monitor cmd will completejx monit
// so after it completes we wait for another 1 second

// ########################## jx monitor start
//var ret = jxcore.utils.cmdSync(cmd + "start");
//assert.ok(ret.exitCode <= 0, "Monitor did not start after `start` command. \n", JSON.stringify(ret));

// ########################## jx monitor run test-monitor-run-app.js

// this should be launched in background. & at the end of cmd does not work proper on windows
var out = fs.openSync(logFileName, 'a');
var err = fs.openSync(logFileName, 'a');
var child = childprocess.spawn(process.execPath, [ "monitor", "run", appFileName ] , { detached: true, stdio: [ 'ignore', out, err ] });
//child.unref();

var pid = child.pid;

var start = Date.now();

var check = function() {
  getJSON(function (err, txt) {

    // should be no error and json should be returned with subscribed application data
    // including "pid" number
    if (!err && txt && txt.length && txt.indexOf(baseFileName) > -1) {
      subscribed = true;
      console.log("subscribed after", Date.now() - start);
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

setTimeout(check, 2500);
//process.nextTick(check);

//setTimeout(function() {
//  process.kill(child.pid);
//}, 3000);


