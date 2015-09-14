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



require('child_process').exec('"' + process.execPath + '" package child.js -add', function(err, stdout, stderr) {
  console.log("closed");
  console.log(stdout);
  process.exit();
});

//var ret = jxcore.utils.cmdSync('"' + process.execPath + '" ./child.jx');
//console.log(ret.out);