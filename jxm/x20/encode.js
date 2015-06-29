// Copyright & License details are available under JXCORE_LICENSE file


var querystring = require('querystring');

var s = "ä ö ü Ä Ö Ü %!@#$%^&*()_+";
var se = escape(s);
var se2 = querystring.escape(s);
var sun = unescape(se);

var euc = encodeURIComponent(s);
var duc = decodeURIComponent(euc);
console.log("duc", euc, duc);

console.log("escaped", se);
console.log("unescaped", sun);

console.log("unescaped qs", querystring.unescape(se));
console.log("unescaped qs", querystring.unescape(se2));
//console.log("unescaped", sun);

//console.log("bom?", unescape("%22%7D%7D") );