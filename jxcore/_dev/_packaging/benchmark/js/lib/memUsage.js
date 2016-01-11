// Copyright & License details are available under JXCORE_LICENSE file

var results = [];
var normalized = false;
var interval = null;
var pid = null;

var check = function () {

  var cmd = 'ps x -o pid,rss,vsz -p "' + pid + '"';
  var ret = jxcore.utils.cmdSync(cmd);

  //jxcore.utils.console.info('cmd', cmd, 'cyan');
  //jxcore.utils.console.info('found', ret.exitCode, 'cyan');
  //jxcore.utils.console.info(ret.out, 'yellow');

  if (ret.exitCode) {
    results.push[ret.out];
    exports.stop();
    return;
  }

  // ret.out is e.g.:
  // PID    RSS      VSZ
  // 13173  13252  2486820

  var line = ret.out.trim().split('\n')[1];
  //jxcore.utils.console.info(line, 'yellow');
  if (!line || line.indexOf(pid + ' ') === -1)
    return;

  var tabs = line.split(' ');
  //jxcore.utils.console.info("tabs", tabs, 'yellow');
  var arr = [];

  for (var o in tabs) {
    var v = tabs[o].trim();
    if (!v) continue;
    var n = parseInt(v);
    if (isNaN(n)) continue;
    arr.push(n);
  }

  if (arr[0] !== pid) return;
  //jxcore.utils.console.info('found', arr, 'cyan');

  var rss = arr[1];
  results.push(rss);
};


exports.start = function (_pid) {

  pid = _pid;
  results = [];
  normalized = false;
  interval = setInterval(check, 250);
};


exports.stop = function () {

  if (interval)
    clearInterval(interval);

  return normalizeResult(results).join('\t');
};


var normalizeResult = function () {

  if (normalized)
    return normalized;

  while (results[results.length - 1] === 0)
    results.pop();

  var stepCount = 100;

  // results = [ 11840, 15964, 20836, 22820, 24376, 24728, 24796, 25056, 25040, 25056 ];

  var ret = [];
  var len = results.length;
  // 1% od 100% = step of results
  var step = (len - 1) / stepCount;
  //console.log('step', step, "len", len)
  //console.log(results)

  for (var i = 1; i <= stepCount; i++) {
    var currentStep = i * step;
    if (currentStep > len - 1) currentStep = len - 1;
    var floor = Math.floor(currentStep);
    var ceil = Math.ceil(currentStep);
    var fx = currentStep - floor;

    if (floor === 0) ceil = 1;
    if (ceil === len - 1 && floor == len - 1) {
      floor = ceil - 1;
      fx = 1;
    }

    var floorV = results[floor];
    var ceilV = results[ceil];


    var dx = floorV + (ceilV - floorV) * fx;
    dx = Math.round(dx);
    //console.log(i, step, "curstep", currentStep, "floor", floor + " / " + floorV, "ceil", ceil + " / " + ceilV, "dx", dx, "fx", fx);
    //console.log(i, step, "curstep", currentStep, "floor", floor, "ceil", ceil);

    ret.push(dx);
  }

  //jxcore.utils.console.info(ret.join('\t'));
  //jxcore.utils.console.warn(results.join('\t'));
  normalized = ret;
  return normalized;
};