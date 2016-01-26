// Copyright & License details are available under JXCORE_LICENSE file

var path = require('path');
var fs = require('fs');
var cp = require('child_process');
var common = require('./common');

var arr = fs.readFileSync('./test_in.txt').toString().split('\n');
var file_test_out = path.join(__dirname, 'test_out.json');

var p = jxcore.utils.argv.parse();
var execPath = p.bin ? p.bin.value : process.execPath;
//execPath = '"' + execPath + '"';

var out = {};
if (fs.existsSync(file_test_out) && !p.force)
  out = require(file_test_out);

if (p.force)
  jxcore.utils.cmdSync('cd ' + exports.repoRoot +  ' && rm -rf node_modules test_out.json');

var runNext = function() {
  setTimeout(next, 1);
};


var testRequire = function(moduleName) {

  if (moduleName.indexOf('-cli') !== -1)
    return true;

  try {
    jxcore.utils.console.info('Testing require(' + moduleName + ')...');
    require(moduleName);
    jxcore.utils.console.info('OK');
    return true;
  } catch (ex) {
    jxcore.utils.console.error('Error:', ex);
    return false;
  }
};

var next = function() {

  if (!arr.length) {
    jxcore.utils.console.info('Done.');
    return;
  }
  var m = arr.shift();
  if (!m)
    return runNext();

  m = m.trim();

  if (!m || m.slice(0,1) == '#')
    return runNext();

  if (out[m]) {
    jxcore.utils.console.info('Already tested:', m, 'yellow');
    return runNext();
  }

  //jxcore.utils.cmdSync(execPath + ' npm')

  jxcore.utils.console.info('Starting', m);
  // '--loglevel verbose'
  cp.spawn(execPath, [ 'install', m, '--autoremove', 'test', '--loglevel', 'error'], {
    stdio: 'inherit'
  }).on('close', function(code) {
    if (!code) {

      if (testRequire(m)) {
        jxcore.utils.console.info('Success', m);
        out[m] = true;
        fs.writeFileSync(file_test_out, JSON.stringify(out, null, 4));
        return runNext()
      }
    }
  });
};


next();