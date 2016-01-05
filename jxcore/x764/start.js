// Copyright & License details are available under JXCORE_LICENSE file


var cp = require('child_process');

cp.exec('"' + process.execPath + '" ./index.js -V', function (error, stdout, stderr) {
  console.log(error || stdout + '');
});