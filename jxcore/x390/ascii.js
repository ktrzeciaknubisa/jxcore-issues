// Copyright & License details are available under JXCORE_LICENSE file


var code = "│".charCodeAt(0);
console.log("code", code);

var sign = String.fromCharCode.apply(null, [ code ]);
console.log("sign", sign);