// Copyright & License details are available under JXCORE_LICENSE file

var called = false;

//Error.prepareStackTrace = function (_, stack) {
//  called = true;
//  return stack;
//};

var err = new Error();
//var stack = err.stack;


process.on('exit', function () {
  console.info(process.versions.sm ? "SM" : "VB", ": Error.prepareStackTrace",
    called ? "called" : "not called", err.captured ? "captured: " + err.captured : " not captured");
});
