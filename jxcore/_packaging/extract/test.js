// Copyright & License details are available under JXCORE_LICENSE file

var path = require("path");

var s = "/Users/nubisa_krzs/Documents/GitHub/ktrzeciaknubisa/jxcore-issues/jxcore/_packaging/add_slim/assets/src/a/b/src/src2.js";
var s = path.normalize(s);
//var s = "\\_packaging\\add_slim\\assets\\src\\a\\b\\src\\src2.js";
//var s = "/Users/nubisa_krzs/Documents/GitHub/ktrzeciaknubisa/jxcore-issues/jxcore/_packaging/add_slim/asset";


var test = function(file, part) {
  //var r = new RegExp('^' + "[.*\\|.*/]" + part + "[\\.*|/.*]" + '$');
  var r = new RegExp('^' + "(.*/)?" + part + "(/.*)?" + '$');
  //var r = new RegExp('^' + "(.*\\\\)?" + part + "(\\\\.*)?" + '$');
  //var r = new RegExp('^' + "[(.*\\)|(.*/)]?" + part + "[(\\.*)|(/.*)]?" + '$');
  var ok = r.test(file);
  if (ok)
    jxcore.utils.console.info(part);
  else
    jxcore.utils.console.error(part);
};


var tests = [
  "assets",
  "asset",
  "src2.js",
  "src2.j",
  "a",
];

for(var o in tests) {
  test(s, tests[o]);
}