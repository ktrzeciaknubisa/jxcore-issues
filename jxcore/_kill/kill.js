// Copyright & License details are available under JXCORE_LICENSE file


var pid = parseInt(process.argv[2]);

var checkAlive = function() {
  try {
    return process.kill(pid, 0);
  } catch (ex) {
    //console.error("Cannot check alive:", pid, ex);
    return false;
  }
};

var kill = function() {
  try {
    return process.kill(pid);
  } catch (ex) {
    //console.error("Cannot kill:", pid, ex);
    return false
  }
};

console.log("check alive before", pid, checkAlive());
console.log("kill", pid, kill());

var cnt = 0;
setInterval(function() {
  cnt++;
  console.log("check alive after", pid, checkAlive());
  if (cnt > 10)
    process.exit();
}, 100);
