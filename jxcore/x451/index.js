// Copyright & License details are available under JXCORE_LICENSE file

var fs = require('fs');
var path = require('path');
var jx = require('jxtools');
var assert = jx.assert;

var execPath = '"' + process.execPath + '" ';
var assetDir = path.join(__dirname, "assets", "test-error-line-column");

var checkFile = function(filePath, expectedStrings) {

  // plain js
  var ret_plain = jxcore.utils.cmdSync(execPath + filePath);

  // jx package
  var script = [
    "cd " + assetDir,
    execPath + "package '" + filePath + "' testFile -add",
    execPath + "testFile.jx"
  ];
  var batch = jx.saveBatchFile(script.join("\n"));
  var ret_jx = jxcore.utils.cmdSync(batch);

  // native package
  var script = [
    "cd " + assetDir,
    execPath + "package '" + filePath + "' testFile -add -native",
    "./testFile"
  ];
  var batch = jx.saveBatchFile(script.join("\n"));
  var ret_exe = jxcore.utils.cmdSync(batch)

  //console.log("\nret plain\n", ret_plain.out);
  //console.log("\nret jx\n", ret_jx.out);
  //console.log("\nret exe\n", ret_exe.out);


  for (var o = 0, len = expectedStrings.length; o < len; o++) {
    var found_js = ret_plain.out.indexOf(expectedStrings[o]) > -1;
    var found_jx = ret_jx.out.replace(/\.js\.jx/g, ".js").indexOf(expectedStrings[o]) > -1;
    var found_exe = ret_exe.out.replace(/\.js\.jx/g, ".js").indexOf(expectedStrings[o]) > -1;

    assert.ok(found_js, "The string `" + expectedStrings[o] + "` not found in output of plain js file.");
    assert.ok(found_jx, "The string `" + expectedStrings[o] + "` not found in output of jx package.");
    assert.ok(found_exe, "The string `" + expectedStrings[o] + "` not found in output of native package.");
  }

};

if (process.versions.v8) {

  /*
   Expected output:

   /Users/nubisa_krzs/Documents/GitHub/jxcore/test/jxcore/assets/test-error-line-column/file1.js:5
   var s = a;  //line 5
   ^
   ReferenceError: a is not defined
   at Object.<anonymous> (/Users/nubisa_krzs/Documents/GitHub/jxcore/test/jxcore/assets/test-error-line-column/file1.js:5:9)

   */
  checkFile(path.join(assetDir, "file1.js"), [ "file1.js:5\n", "file1.js:5:9)", "var s = a;  //line 5\n"]);
};