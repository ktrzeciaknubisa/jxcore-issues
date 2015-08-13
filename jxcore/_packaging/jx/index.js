// Copyright & License details are available under JXCORE_LICENSE file


var fs = require("fs");
var path = require("path");
var x = fs.readFileSync("./package.json")

//console.log(x.toString());
var d1 = "./test";
var d2 = ".\\test";
var d3 = path.join("build", "Release");
var d4 = path.join(".", "build", "Release");
var d5 = ".\\" + path.join("build", "Release");

console.log("dir exists?", d1, fs.existsSync(d1));
console.log("dir exists?", d2, fs.existsSync(d2));
console.log("dir exists?", d3, fs.existsSync(d3));
console.log("dir exists?", d4, fs.existsSync(d4));
console.log("dir exists?", d5, fs.existsSync(d5));