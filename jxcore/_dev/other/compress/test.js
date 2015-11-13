// Copyright & License details are available under JXCORE_LICENSE file


var jxt = process.binding('jxutils_wrap');
var fs = require('fs');

var f = fs.readFileSync('./file_small.txt');
//var f = fs.readFileSync('./file_big.txt');
//var f = fs.readFileSync('./jx');

//var c = jxt._cmp(f);
//var u = jxt._ucmp(c);

var c = jxt._cmp(f.toString('base64'));
var u = jxt._ucmp(c);
var u1 = new Buffer(u.toString(), 'base64');

console.log(f.length, u.length, u1.length, c.length);

console.log('f', f.toString());
console.log('c', c.toString());
console.log('u0', u.toString());
console.log('u1', u1.toString());

if (f.toString() !== u.toString())
  jxcore.utils.console.error('Not equal');