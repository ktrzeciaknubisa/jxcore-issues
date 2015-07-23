// Copyright & License details are available under JXCORE_LICENSE file


var fs = require("fs");
var x = fs.readFileSync("./package.json")

console.log(x.toString());