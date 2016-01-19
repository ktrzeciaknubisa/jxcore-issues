// Copyright & License details are available under JXCORE_LICENSE file

var fs = require('fs');

//require('./test.js');

console.log('filename', __filename)
jxcore.utils.console.info('mainfile', process.mainModule.filename, 'cyan');
//console.log(fs.readFileSync(__filename).toString())

//jxcore.utils.console.info(fs.readFileSync('dir/go.sh').toString());
//console.log(fs.statSync('dir/go.sh'))
//console.log(fs.statSync('dir'))

//var statdir = fs.statSync(__dirname);
//var octaldir = (statdir.mode & parseInt('777', 8)).toString(8);

//return;

//var statfile = fs.statSync(__filename);
//var statfile = fs.statSync(__filename);
//var octalfile = (statfile.mode & parseInt('777', 8)).toString(8);

//console.log('stat dir/test.js', fs.statSync('dir/test.js'));
//console.log('stat test.js', fs.statSync('test.js'));


//console.log('stat index.js', fs.statSync(__dirname + '/index.js'));
//jxcore.utils.console.info('exists __filename?');
//console.log(fs.existsSync(__filename));
//jxcore.utils.console.info('stat __filename');
//console.log(fs.statSync(__filename));

//console.log('stat dir/test.js', fs.statSync('dir/test.js'));

return;

console.log('dir', statdir.mode, octaldir );
console.log('file', statfile.mode, octalfile );

