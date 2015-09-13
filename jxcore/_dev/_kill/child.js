// Copyright & License details are available under JXCORE_LICENSE file

process.title = "jxapp";
console.log("child pid",process.pid);
setInterval(function() {}, 10000);


process.on('SIGTERM', function() {
  console.log("child received a signal");
});