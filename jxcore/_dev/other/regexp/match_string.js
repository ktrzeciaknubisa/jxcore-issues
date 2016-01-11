// Copyright & License details are available under JXCORE_LICENSE file


var fs = require('fs');
var path = require('path');

var file = '/Users/nubisa_krzs/Documents/GitHub/ktrzeciaknubisa/jxcore-issues/jxcore/x564/node_modules/leveldown/binding.gyp';
var str = fs.readFileSync(file).toString();

var str = fs.readFileSync('./match_sample.txt').toString();

//var reg = /node\s+-e\s+(\\?["|'])require/g;

//var r = str.match(reg);
//console.log(r);

//var _new = str.replace(reg, "jx -e $1require");


var reg = /[^a-zA-Z0-9_\/@\.](node)\s/g;
var r = str.match(reg);
console.log(r);
jxcore.utils.console.info(reg.exec(str));

//var _new = str.replace(reg, "jx -e $1require");
//jxcore.utils.console.info(_new);