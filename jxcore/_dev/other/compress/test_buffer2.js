// Copyright & License details are available under JXCORE_LICENSE file

var jxt = process.binding('jxutils_wrap');
var fs = require('fs');

var input = fs.readFileSync('./big-not-pretty2.xml');
input = new Buffer("");
var c = jxt._cmp(input);
var output = jxt._ucmp(c);

if (!c)
  jxcore.utils.console.error('Empty input!');

if (!output)
  jxcore.utils.console.error('Empty output!');

var enc = 'base64';
//var enc = undefined;
//var enc = 'ascii';
var sinput = input.toString(enc);
var soutput = output.toString(enc);

//sinput = JSON.stringify(sinput);
//soutput = JSON.stringify(soutput);

if (sinput !== soutput) {
  jxcore.utils.console.error('input and output are different!');
  jxcore.utils.console.info('input:\n', sinput);
  jxcore.utils.console.warn('output:\n', soutput);

}