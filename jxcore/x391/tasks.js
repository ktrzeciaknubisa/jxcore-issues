// Copyright & License details are available under JXCORE_LICENSE file

jxcore.tasks.setThreadCount(5);

var method = function () {
  jxcore.utils.console.info("execArgv", process.execArgv, process.threadId, "cyan");
  jxcore.utils.console.info("execArgv", process.argv, process.threadId, "magenta");
};

//jxcore.tasks.addTask(method);
//jxcore.tasks.addTask(method);
//jxcore.tasks.addTask(method);
jxcore.tasks.runOnce(method);

