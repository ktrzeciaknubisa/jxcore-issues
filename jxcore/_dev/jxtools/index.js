// Copyright & License details are available under JXCORE_LICENSE file


var jx = require('jxtools');

jx.http.downloadJXcore('0.3.0.7', 'sm', function(err, jxfile) {
  console.log(err ? "Err: " + err : "OK: " + jxfile);
});