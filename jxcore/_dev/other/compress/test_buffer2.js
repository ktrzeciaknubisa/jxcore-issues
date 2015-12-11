// Copyright & License details are available under JXCORE_LICENSE file

var jxt = process.binding('jxutils_wrap');
var fs = require('fs');

var input = fs.readFileSync('./big-not-pretty2.xml');
var c = jxt._cmp(input);
var output = jxt._ucmp(c);

if (!output)
  jxcore.utils.console.error('Empty output!');
