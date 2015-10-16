// Copyright & License details are available under JXCORE_LICENSE file


var reg = /Android[^\d]*([\d[_|.]]+\d)/i;
var reg = /android (; Release\/)?(\d+(?:\.\d+)+);/i;
var str_motorola = 'Linux;Android ; Release/4.1.2;';
var str = 'Android 4.1.2;'

console.log(str, str.match(reg)[2])
console.log(str_motorola, str_motorola.match(reg)[2])