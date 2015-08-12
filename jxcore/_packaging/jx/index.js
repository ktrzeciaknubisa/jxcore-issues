// Copyright & License details are available under JXCORE_LICENSE file


var fs = require("fs");
var path = require("path");
var x = fs.readFileSync("./package.json")

//console.log(x.toString());

console.log("dir exists?", fs.existsSync("." + path.sep + "test"));