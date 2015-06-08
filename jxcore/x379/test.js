// Copyright & License details are available under JXCORE_LICENSE file


var count = 0;
setInterval(function() {
  if (count++ > 100) process.exit(0);
  require('./hey');
}, 100);