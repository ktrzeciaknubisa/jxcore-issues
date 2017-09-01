// Copyright & License details are available under JXCORE_LICENSE file

var babel = require('babel-core');
var fs = require('fs');

babel.transformFile("test.js", {}, function (err, result) {
  if (err)
    jxcore.utils.console.error(err);
  else {
    //jxcore.utils.console.log(result);

    fs.writeFileSync('test_code.js', result.code);
    fs.writeFileSync('test_map.js', result.map);
    //fs.writeFileSync('test_ast.js', JSON.stringify(result.ast, null, 4));
    fs.writeFileSync('test_ast.js', require('util').inspect(result.ast));
  }
});


//result.code; // Generated code
//result.map; // Sourcemap
//result.ast; // AST