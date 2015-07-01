// Copyright & License details are available under JXCORE_LICENSE file


var folder = "Эа_эжт_аляквюид\\test";
console.log("folder", folder);
var ret = jxcore.utils.cmdSync("mkdir " + folder);
console.log(ret.out);
