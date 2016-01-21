// Copyright & License details are available under JXCORE_LICENSE file

var p = jxcore.utils.argv.parse();

if (!p.node2jx && !p.jx2node) {
  jxcore.utils.console.error('Use either --node2jx or --jx2node');
  process.exit();
}
//console.log(p);


var path = require('path');
var fs = require('fs');

var common = require('./common');
if (!common.checkBranch(['jxcore-0.3.1.0', 'jxcore-3.1.0.1-from-node-0.5.4']))
  return;

//if (p.node2jx) console.log('node2jx');
//if (p.jx2node) console.log('jx2node');

var checkNext = function (dir) {
  setTimeout(function () {
    //console.log(' new', dir);
    checkDir(dir);
  }, 1);
};

var checkDir = function (dir) {

  var files = fs.readdirSync(dir);
  for (var o in files) {
    var f = files[o];
    var ff = path.join(dir, f);
    var stat = fs.statSync(ff);

    if (stat.isDirectory()) {
      checkNext(ff);
    } else {

      var s = fs.readFileSync(ff).toString();

      if (p.node2jx && s.indexOf('#!/usr/bin/env node') !== -1) {
        s = s.replace(new RegExp('#!/usr/bin/env node', 'g'), '#!/usr/bin/env jx');
        fs.writeFileSync(ff, s);
        console.log(ff);
      }

      if (p.jx2node && s.indexOf('#!/usr/bin/env jx') !== -1) {
        s = s.replace(new RegExp('#!/usr/bin/env jx', 'g'), '#!/usr/bin/env node');
        fs.writeFileSync(ff, s);
        console.log(ff);
      }
    }
  }

};


checkDir(path.join(common.repoRoot, 'npm'));

