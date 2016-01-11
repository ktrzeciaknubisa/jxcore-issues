// Copyright & License details are available under JXCORE_LICENSE file

var fs = require('fs');

fs.createReadStream(__filename, {
  flags: 'r',
  mode: 0666
}).on('data', function (chunk) {
  console.log('on data');
}).on('close', function () {
  console.log('on close');
}).on('error', function (err) {
  console.error('on error', err);
});