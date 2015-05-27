// Copyright & License details are available under JXCORE_LICENSE file

var task = {};
task.define = function () {

  jxcore.utils.console.warn("pid", process.threadId);
  try {
    // this works:
    // var mod = require(__dirname + "/_asset_file.js");

    // this fails:
    //var mod = require("./_asset_file.js");
    //console.log("process.cwd() 2",process.cwd());
    var fs = require("fs");
    //var fs = require(__dirname + "/fs1.js");
    var stat = fs.statSync("./_asset_file.js");
    jxcore.utils.console.log("stat2", stat, "yellow");

  } catch (ex) {
    console.error("Cannot require ./_asset_file.js from inside define(): " + ex + "\n__dirname = " + __dirname+
    "\n__process.cwd() = " + process.cwd());
    console.error(ex.stack);
    process.exit(1);
  }
};

jxcore.tasks.addTask(task);


//console.log("process.cwd() 1",process.cwd());
//
//var fs = require("fs");
//var fs = require(__dirname + "/fs1.js");
//var stat = fs.statSync("./_asset_file.js");
//jxcore.utils.console.log("stat1", stat, "green");

