// Copyright & License details are available under JXCORE_LICENSE file

var task = {};
task.define = function () {

  try {
    // this works:
    // var mod = require(__dirname + "/_asset_file.js");

    // this fails:
    var mod = require("./_asset_file.js");
  } catch (ex) {
    console.error("Cannot require ./_asset_file.js from inside define(): " + ex + "\n__dirname = " + __dirname+
    "\n__process.cwd() = " + process.cwd());
    process.exit(1);
  }
};

jxcore.tasks.addTask(task);


//console.log("process.cwd()",process.cwd());

