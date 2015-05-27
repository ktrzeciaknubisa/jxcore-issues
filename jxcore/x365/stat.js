var fs = require('fs');
var stat= fs.statSync('./_asset_file.js');
stat = Object.create(stat)
console.log(JSON.stringify(stat));