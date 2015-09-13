// Copyright & License details are available under JXCORE_LICENSE file

var fs = require("fs");
var Promise = require("bluebird");

Promise.promisifyAll(fs);

fs.readFileAsync("package.json").then(JSON.parse).then(function(val) {
  console.log(val);
})
  .catch(SyntaxError, function(e) {
    console.error("invalid json in file");
  })
  .catch(function(e) {
    console.error("unable to read file");
  });