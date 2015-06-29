var called = false;


jxcore.utils.console.info(process.versions.sm ? "SM" : "VB", "green");

//Error.stackTraceLimit = 100;

Error.prepareStackTrace = function (_, stack) {
  console.log("stack", stack);
  called = true;
  return stack;
};
console.trace();
//
//
//var stack = (new Error()).stack;

//var x = new Error();
//var s = x.stack;

//for (var o in stack) {
//  jxcore.utils.console.info(o, "=", stack[o]);
//}
//console.log(s);
//console.log(stack.toString());

process.on('exit', function () {
  console.info("Error.prepareStackTrace", called ? "called" : "not called");
});

//jxcore.utils.console.warn(Error);

