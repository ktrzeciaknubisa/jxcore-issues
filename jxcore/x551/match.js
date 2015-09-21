// Copyright & License details are available under JXCORE_LICENSE file




require('child_process').execFile(process.execPath, ['--v8-options'], function (execErr, result) {
//require('child_process').execFile(process.execPath, ['-v'], function (execErr, result) {
  console.log("result", result);
});


//var ret = jxcore.utils.cmdSync(process.execPath + " --v8-options");

var ret = "  --v8-options are not available for non-V8 build";
var flags = ret.match(/\s\s--(\w+)/gm);
console.log(flags);