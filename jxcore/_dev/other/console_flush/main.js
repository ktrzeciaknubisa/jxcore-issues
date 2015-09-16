/**
 * Created by nubisa_krzs on 9/13/2015.
 */

//
//require('child_process').spawn(process.execPath, [ "./child.js", "test" ], {
//  stdio: 'inherit'
//}).on('close', function(code) {
//  console.log("closed");
//  process.exit();
//});


var cmd = 'package child.js --website "some website"';
//var cmd = 'monitor stop';
var cmd = 'child.jx readme';
//var cmd = 'blank.js';
//var cmd = 'stream.js';


var cmd = '"' + process.execPath + '" ' + cmd;
require('child_process').exec(cmd, function(err, stdout, stderr) {
  console.log("exec");
  console.log(stdout);
});

console.time("child");
var ret = jxcore.utils.cmdSync(cmd);
console.timeEnd("child");

console.log("cmdSync");
console.log(ret.out);



//var cmd =  '"' + process.execPath + '" package child.js';
//require('child_process').exec(cmd, function(err, stdout, stderr) {
//  console.log(stdout);
//});