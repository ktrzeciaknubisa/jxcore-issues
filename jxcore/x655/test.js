// Copyright & License details are available under JXCORE_LICENSE file


var method = function() {

  process.on('uncaughtException', function(ex) {
    console.log('ex', ex);
  });

  process.on('restart', function (restartCallback, newExitCode, x2) {
    // do whatever you want before application's crash
    // and when you're done - call the callback to restart the process
    console.log('onrestart', newExitCode, x2);
    //restartCallback();
  });

  var s = nonexistentFunc();
}


jxcore.tasks.addTask(method);