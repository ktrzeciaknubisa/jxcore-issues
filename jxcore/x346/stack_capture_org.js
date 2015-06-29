// Copyright & License details are available under JXCORE_LICENSE file


var err = new Error();
console.info(process.versions.sm ? "SM" : "VB", ": ", err.captured ? "captured" : "not captured");
