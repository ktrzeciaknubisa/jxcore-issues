// Copyright & License details are available under JXCORE_LICENSE file

var singleTest = require(__dirname + '/singleTest.js');
var util = require('util');
var path = require('path');
var dur = require(__dirname + '/duration.js');

var group = null;
var duration = 0;
var cnt = 0;
var result = {mem: ''};


var run = function (_group, cb) {

  var _cb = function (err, _duration) {
    if (err)
      return cb(err);

    var it = test.options && test.options.iteration || 1;
    //jxcore.utils.console.log('adding dur', _duration, 'cyan');
    jxcore.utils.console.info('Done single test ' + it + ' times ' + test.name + ': ' + dur.toString(_duration), 'cyan');
    result.mem += test.name + '\t' + test.mem + '\n';
    //jxcore.utils.console.info(test.name + '\t' + test.mem, 'magenta');
    duration += _duration;
    cnt++;

    if (test.stop) {
      //console.log('stopping');
      return cb && cb(null, getResult());
    }

    process.nextTick(function () {
      run(group, cb);
    });
  };

  var test = group.tests.shift();
  if (test) {
    //console.log("running test", test.name);
    singleTest.run(fill(test), _cb);
  }
  else {
    cb && cb(null, getResult());
  }

};

exports.run = function (_group, cb) {

  group = _group;
  duration = 0;
  cnt = 0;
  report = '';

  run(_group, cb);
};

// gets define value either from test.define or group.global.define
var getDefine = function (test, name) {

  // e.g. CWD or __dirname
  var v = expandValue(name);
  if (typeof v !== 'undefined')
    return v;

  if (test && test.define && test.define[name])
    return expandValue(name, test.define[name], test);

  if (group.global && group.global.define && group.global.define[name])
    return expandValue(name, group.global.define[name], test);
};

// expands e.g. {$bin} from either test.define or group.global.define
// be careful with recurrence!
// a define item  should not call other, which calls the first one...
var expandValue = function (name, value, test) {

  if (util.isArray(value)) {
    // work on copy of value
    var value = JSON.parse(JSON.stringify(value));
    for (var o in value) {
      value[o] = expandValue(name, value[o], test);
    }
    return value;
  }

  //jxcore.utils.console.info('expanding', name, value);

  if (name === 'CWD')
    return process.cwd();

  if (name === '__dirname')
    return path.dirname(require.main.filename);

  //jxcore.utils.console.warn('name', name, value);
  var arr = value && typeof value === "string" ? value.match(/\{\$[a-z|_|0-9]*\}/gi) : null;
  //jxcore.utils.console.warn('name', name, arr, value);
  //jxcore.utils.console.warn(name, arr);
  if (!value || !arr || !arr.length)
    return value;

  for (var o in arr) {
    // arr[o] is e.g. {$CWD}
    var tag = arr[o].slice(2, arr[o].length - 1);
    // tag is e.g. CWD
    var v = getDefine(test, tag);
    if (typeof v !== "undefined") {
      // no need for global. if there are repetitions, arr contains them
      value = value.replace(arr[o], v);
    }
  }

  return value;
};

// copies group.global[propertyName] to test
// e.g. group.global["define"] to test.define
var copyFromGlobal = function (test, propertyName) {

  if (!test[propertyName])
    test[propertyName] = {};

  if (group.global[propertyName]) {
    for (var o in group.global[propertyName]) {
      if (!test[propertyName][o])
        test[propertyName][o] = group.global[propertyName][o];
    }
  }

  for (var o in test[propertyName])
    test[propertyName][o] = expandValue(o, test[propertyName][o], test);
};

var fill = function (test) {

  copyFromGlobal(test, "define");
  copyFromGlobal(test, "pre");
  copyFromGlobal(test, "actual");
  copyFromGlobal(test, "options");

  //jxcore.utils.console.log(test);

  return test;
};


var getResult = function () {

  result.duration = duration / cnt;
  //jxcore.utils.console.info('dd2', duration, cnt)
  return result;
};