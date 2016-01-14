// Copyright & License details are available under JXCORE_LICENSE file


var fs = require('fs');
var path = require('path');

var file = '/Users/nubisa_krzs/Documents/GitHub/ktrzeciaknubisa/jxcore-issues/jxcore/x564/node_modules/leveldown/binding.gyp';
var str = fs.readFileSync(file).toString();

var str = fs.readFileSync('./match_sample.txt').toString();
var str = fs.readFileSync('./should_match.txt').toString();

//var reg = /node\s+-e\s+(\\?["|'])require/g;

//var r = str.match(reg);
//console.log(r);

//var _new = str.replace(reg, "jx -e $1require");


var replaceNode = function(str) {

  /* This regexp covers e.g.:

   <!(node -e "require('nan')\")
   <!(node -e \"require('nan')\")
   "npm install semver && node -e \"require('nan')
   "prepublish": "node ./tools/prepublish.js",

  but not e.g.:

    @node
    "require(\'./tools/NODE_NEXT.js\')"
    /some/path/node/
   */

  var reg = /[^a-zA-Z0-9_\/@\.](node)\s/g;
  var replacement = 'jx';
  var len = 4; // 4 is length of "node"
  var r = null;
  while (r = reg.exec(str))
    str = str.slice(0, r.index + 1) + replacement + str.slice(r.index + len + 1);

  // test also beginning of string
  if (str.slice(0, len + 1) === 'node ')
    str = replacement + ' ' + str.slice(len + 1);

  return str;
};

var replaceNpm = function(str) {

  var reg = /[^a-zA-Z0-9_\/@\.](npm)\s/g;
  var replacement = 'jx npm';
  var len = 3; // 3 is length of "npm"
  var r = null;
  while (r = reg.exec(str))
    str = str.slice(0, r.index + 1) + '{JX_NPM}' + str.slice(r.index + len + 1);

  str = str.replace(/\{JX_NPM\}/g, replacement);

  // test also beginning of string
  if (str.slice(0, len + 1) === 'npm ')
    str = replacement + ' ' + str.slice(len + 1);

  return str;
};


exports.replaceForJX = function(str) {
  str = replaceNode(str);
  str = replaceNpm(str);
  return str;
};


//var reg = /[^a-zA-Z0-9_\/@\.](node)\s/g;
//var replacement = '"' + process.execPath + '"';
//var replacement = '####';

//var r = null;
//while (r = reg.exec(str)) {
  //jxcore.utils.console.info(r, 'cyan');
  //jxcore.utils.console.info(require('util').inspect(r), '\n');
  //jxcore.utils.console.error(r.index);

  //str = str.slice(0, r.index + 1) + replacement + str.slice(r.index + 4 + 1);
  //jxcore.utils.console.warn(str);
  //for(var x in r)
  //  jxcore.utils.console.log('r[', x, ']', r[x]);
  //break;
//}
//var r = str.match(reg);
//console.log(r);
//jxcore.utils.console.info(reg.exec(str));

//var _new = str.replace(reg, "jx -e $1require");
//jxcore.utils.console.info(_new);

console.log(exports.replaceForJX(str));