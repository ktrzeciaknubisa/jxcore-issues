// Copyright & License details are available under JXCORE_LICENSE file

var check = function() {
  var ret = jxcore.utils.cmdSync("./index");
  if (ret.out.trim() !== "ok")
    jxcore.utils.console.error("Err", ret.out);
};

var start = new Date();
var ret = jxcore.utils.cmdSync("/Users/nubisa_krzs/Documents/GitHub/jxcore/out_v8_64/Release/jx package index.js -add -native");
if (ret.out.indexOf("[OK]") === -1) console.log(ret.out);
var newV8 = new Date() - start;
console.log("new V8", newV8);
check();

var start = new Date();
var ret = jxcore.utils.cmdSync("jx302v8 package index.js -add -native");
if (ret.out.indexOf("[OK]") === -1) console.log(ret.out);
var oldV8 = new Date() - start;
console.log("old V8", oldV8);
check();

var start = new Date();
var ret = jxcore.utils.cmdSync("/Users/nubisa_krzs/Documents/GitHub/jxcore/out/Release/jx package index.js -add -native");
if (ret.out.indexOf("[OK]") === -1) console.log(ret.out);
var newSM = new Date() - start;
console.log("new SM", newSM);
check();

var start = new Date();
var ret = jxcore.utils.cmdSync("jx302sm package index.js -add -native");
if (ret.out.indexOf("[OK]") === -1) console.log(ret.out);
var oldSM = new Date() - start;
console.log("old SM", oldSM);
check();


var smGain = newSM * 100 / oldSM;
//var v8Gain = newV8 * 100 / oldV8;

console.log("V8 gain: ", oldV8, "ms (old) vs", newV8, "ms (new) ->", Number(oldV8 / newV8).toFixed(1) + "x", "faster")
console.log("SM gain: ", oldSM, "ms (old) vs", newSM, "ms (new) ->", Number(oldSM / newSM).toFixed(1) + "x", "faster")