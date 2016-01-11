// Copyright & License details are available under JXCORE_LICENSE file

process.title = 'benchmarker';
process.chdir(__dirname);

var fs = require('fs');
var path = require('path');
var groups = require(__dirname + '/lib//groups.js');

var argv2 = path.resolve(process.argv[2]);
if (!argv2 || !fs.existsSync(argv2))
  return jxcore.utils.console.error('Please provide definition file.');

var json = require(argv2);

if (!json.groups)
  return jxcore.utils.console.error('Config does not contain "groups" section');


//var s = 1.6;
//console.log(s, Math.floor(s))
//return;
groups.run(json.groups, function (err) {
  if (err)
    jxcore.utils.console.error(err);
  else
    jxcore.utils.console.info('OK');
});