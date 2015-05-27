/**
 * Created by nubisa_krzs on 5/19/2015.
 */


var fs = require("fs");
var path = require("path");

var s = fs.readFileSync(path.join(__dirname, "DBSchema/dir/test.txt")).toString();
console.log("contents", s);