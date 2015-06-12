// Copyright & License details are available under JXCORE_LICENSE file

var fs = require("fs");
var pathModule = require("path");


var delTree = function (loc, checkRemove) {
  if (fs.existsSync(loc)) {
    var _files = fs.readdirSync(loc);
    var _removed = 0;
    for (var o in _files) {
      var file = _files[o];
      var _path = loc + pathModule.sep + file;
      if (!fs.lstatSync(_path).isDirectory()) {
        try {
          if (!checkRemove || checkRemove(loc, file, _path, false)) {
            fs.unlinkSync(_path);
            _removed++;
          }
        } catch (e) {
          cc.write("Permission denied ", "red");
          cc.write(loc, "yellow");
          cc.log(" (do you have a write access to this location?)");
        }
        continue;
      }
      // folders
      var removeDir = checkRemove && checkRemove(loc, file, _path, true);
      if (!checkRemove || removeDir)
        delTree(_path);
      else
        delTree(_path, checkRemove);
    }

    if (_removed == _files.length) {
      fs.rmdirSync(loc);
      console.log("rmdirsync", _removed, _files.length, loc);
    }
  }
};

var masks = ["*.gz", "*.txt", "bin", "samples", "test/amd.js"];
var specials = ["\\", "^", "$", ".", "|", "+", "(", ")", "[", "]", "{", "}"];  // without '*' and '?'

var cb = function (folder, file, path, isDir) {

  for (var o in masks) {
    if (!masks.hasOwnProperty(o))
      continue;

    var mask = masks[o];
    var isPath = mask.indexOf(pathModule.sep) !== -1;

    // entire file/folder basename compare
    if (mask === file)
      return true;

    // compare against entire path (without process.cwd)
    if (isPath && path.replace(process.cwd(), "").indexOf(mask) !== -1)
      return true;

    // regexp check against * and ?
    var r = mask;
    for (var i in specials) {
      if (specials.hasOwnProperty(i))
        r = r.replace(new RegExp("\\" + specials[i], "g"), "\\" + specials[i]);
    }

    var r = r.replace(/\*/g, '.*').replace(/\?/g, '.{1,1}');
    var rg1 = new RegExp('^' + r + '$');
    var rg2 = new RegExp('^' + pathModule.join(folder, r) + '$');
    if (rg1.test(file) || rg2.test(path))
      return true;
  }

  return false;
};

delTree(__dirname + "/node_modules", cb);