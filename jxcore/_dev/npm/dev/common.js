// Copyright & License details are available under JXCORE_LICENSE file

var path = require('path');

exports.repoRoot = '/Users/nubisa_krzs/Documents/GitHub/ktrzeciaknubisa/npm-diff';

exports.checkBranch = function(branch_names) {

  var ret = jxcore.utils.cmdSync('cd ' + exports.repoRoot +  ' && git status');

  for(var o in branch_names) {
    var ok = ret.out.indexOf('# On branch ' + branch_names[o]) === 0;
    if (ok)
      return true;
  }

  jxcore.utils.console.error('This script can run only on branch', branch_name);
  process.exit();
};