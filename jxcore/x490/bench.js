// Copyright & License details are available under JXCORE_LICENSE file

var fs = require("fs");
var path = require("path");
var p = jxcore.utils.argv.parse();
var total = 10;

var en = jxcore.utils.argv.getValue("en", "v8");

process.chdir(path.join(__dirname, "out"));

if (p.both) {

  var r1 = jxcore.utils.cmdSync("cp ../app/test_" + en + " ./test");
  var r2 = jxcore.utils.cmdSync("cp ../app/test_prev_" + en + " ./test_prev");

  if (r1.exitCode || r2.exitCode)
    throw new Error("Not copied");



  var printed = {};

  var test = function(file) {
    var start = new Date();
    var ret = jxcore.utils.cmdSync(file);
    if (!printed[file]) {
      console.log(file, ret.out);
      printed[file] = true;
    }
    var s = /readX:\s(\d+)ms/g.exec(ret.out)[1];
    var ms = parseInt(s);
    var end = new Date();

    return { "readX" : ms, "exe" : end - start };
  };

  var sum = null;
  var sum_prev = null;

  for(var o = 1; o <= total; o++) {
    var ret = test("./test");
    var ret_prev = test("./test_prev");

    sum += ret.readX;
    sum_prev += ret_prev.readX;
  }

  var av = (sum / total).toFixed(0);
  var av_prev = (sum_prev / total).toFixed(0);
  var percent = (av * 100 / av_prev).toFixed(0);
  jxcore.utils.console.info("Total readX", sum, "/", sum_prev, "Average:", av, "/", av_prev);
  jxcore.utils.console.info("Gain:", percent, "faster:", 100 - percent);

  return;
  // ***************************************************
}


var file = path.basename(jxcore.utils.argv.getValue("f", "test"));
console.log("running", file);
jxcore.utils.cmdSync("cp ./app/" + file + " ./out/" + file);


var start = new Date();
var sum = 0;
for(var o = 1; o <= total; o++) {
  var ret = jxcore.utils.cmdSync("./" + file);
  var s = ret.out.split(" ")[1];
  var ms = parseInt(s);
  sum += ms;
}
var end = new Date();

var av = (end - start) / total;
console.log("Total", end - start, "Average:", av.toFixed(0));
jxcore.utils.console.info("Total readX", sum, "Average:", (sum / total).toFixed(0));



