//a// comment
var s = 1;  //line 2
var s = 1;  //line 3
var s = 1;  //line 4
//var s = a;  //line 5

//process.on('exit', function() {
//  var err = new Error();
//  console.log("myVar", err.myFun());
//})


require("./fff.js")
try {
  require("./fff.js")
  //var s = a;
} catch(ex) {
  console.log("catch", ex.stack);
  jxcore.utils.console.log("gd", require('util').inspect(Error.prototype.gd, { showHidden: true, depth: 5 }),"cyan");
  var fs = require("fs");
  console.log("__filename 1", __filename)
  //console.log("__filename 2", "/Users/nubisa_krzs/Documents/GitHub/ktrzeciaknubisa/jxcore-issues/jxcore/_packaging/native/simple/index.js.jx");
  //jxcore.utils.console.info(fs.readFileSync("/Users/nubisa_krzs/Documents/GitHub/ktrzeciaknubisa/jxcore-issues/jxcore/_packaging/native/simple/index.js.jx").toString());
  //jxcore.utils.console.info(fs.readFileSync(__filename).toString());
  //console.log("index", "\n", fs.readFileSync(__filename).toString(), "magenta");
  //jxcore.utils.console.log("fff", "\n",fs.readFileSync("./fff.js").toString(), "yellow");
}
