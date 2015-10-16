// Copyright & License details are available under JXCORE_LICENSE file


var path = require('path');


console.log(path.isAbsolute('/foo/bar')); // true
console.log(path.isAbsolute('/baz/..'));  // true
console.log(path.isAbsolute('qux/'));     // false
console.log(path.isAbsolute('.'));        // false


console.log(path.isAbsolute('//server'));  // true
console.log(path.isAbsolute('C:/foo/..')); // true
console.log(path.isAbsolute('bar\\baz'));   // false
console.log(path.isAbsolute('.'));         // false