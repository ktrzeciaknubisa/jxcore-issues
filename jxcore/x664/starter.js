// Copyright & License details are available under JXCORE_LICENSE file


if (process.isPackaged)
  process.argv.unshift(null);


require(__dirname + "/" + process.argv[2]);


var fs = require('fs');
var cfgPath = jxcore.utils.argv.parse().config.value;
var config = JSON.parse(fs.readFileSync(cfgPath).toString());
console.log(cfgPath, config);