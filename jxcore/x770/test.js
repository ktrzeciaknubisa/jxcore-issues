// Copyright & License details are available under JXCORE_LICENSE file

var fs = require('fs');

jxcore.utils.console.error('test _filename', __filename);

jxcore.utils.console.info('exists __filename?');
console.log(fs.existsSync(__filename));
jxcore.utils.console.info('stat __filename');
console.log(fs.statSync(__filename));