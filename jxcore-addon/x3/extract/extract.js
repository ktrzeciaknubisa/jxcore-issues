// Copyright & License details are available under JXCORE_LICENSE file

var targz = require('tar.gz');
var fs = require("fs");
var path = require("path");

var loc = __dirname + "/npm.tar.gz";
var target = __dirname;

jxcore.utils.console.warn(process.execPath);

var extract = function (loc, target, cb, targz) {
  new targz().extract(loc, target, function (err) {
    if (err)
      cb(0, err);
    else {
      var clear = false;
      try {
        var fname = path.join(__dirname, path.basename(process.argv[1]));
        console.log("fname", fname);
        //if (fs.existsSync(fname)) {
          clear = true;
        //  fs.unlink(fname);
        //}
      } catch (e) {
      }
      if (clear) {
        //clear_files(target);
        cb(1, "NPM for JX is ready.");
      }
      else {
        cb(1, "JXcore embedded is downloaded");
      }
    }
  });
};

extract(loc, __dirname, function (isdone, msg) {
  console.log("isdone =", isdone, ", msg =", msg);
  if (!isdone) {
    process.exit(1);
    return;
  }

  //gonpm();
}, targz);