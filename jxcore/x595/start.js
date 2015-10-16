// Copyright & License details are available under JXCORE_LICENSE file


jxcore.tasks.addTask(function() {
  process.keepAlive();
  //console.log(process.cwd());
  require('./Ogar');
});