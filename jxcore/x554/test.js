// Copyright & License details are available under JXCORE_LICENSE file

var cp = require("child_process");

var spawn = function() {
  var child = cp.spawn(process.execPath, [ __dirname +  "/child.js"]);
  child.on('close', function() {
    jxcore.utils.continue();
  });
  jxcore.utils.jump();
};

var exec = function() {
  var child = cp.exec(process.execPath + " " + __dirname +  "/child.js", function(err, stdout, stderr) {
    console.log("exec finished");
    //console.log("err", err);
    //console.log("stdout", stdout);
    //console.log("stderr", stderr);
  });
  jxcore.utils.jump();
};

var execFile = function() {
  var child = cp.execFile(process.execPath, [ __dirname +  "/child.js" ]);
  jxcore.utils.jump();
};

var sleep = function(timeout) {
  setTimeout(function(){
    jxcore.utils.continue();
  }, timeout);
  jxcore.utils.jump();
};


console.time("total");
spawn();
//exec();
//execFile();
//sleep(1000);
console.timeEnd("total");

//
//var sleep = function(timeout){
//  setTimeout(function(){
//    jxcore.utils.continue();
//    setTimeout(process.exit, 1000);
//  }, timeout);
//  jxcore.utils.jump();
//};
//
//
//console.time("sleep");
//sleep(2000);
//console.timeEnd("sleep");
//
////
////console.log("h1");
////// hang this process. needs jump() instead of pause()
////// (to be able to return back from closed child)
////jxcore.utils.pause();
////
////console.log("h2");