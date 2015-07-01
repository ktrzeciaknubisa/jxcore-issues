/**
 * Created by nubisa_krzs on 6/10/2015.
 */


var exec = require('child_process').exec, child;

child = exec('mkdir Эа_эжт_аляквюид\\test',
  function (error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if (error !== null) {
      console.log('exec error: ' + error);
    }
  });