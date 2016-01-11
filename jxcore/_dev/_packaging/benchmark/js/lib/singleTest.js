// Copyright & License details are available under JXCORE_LICENSE file

var util = require('util');
var cp = require('child_process');
var fs = require('fs');
var mem = require('./memUsage.js');


var run = function (test, propertyName, cb) {

  if (!test || !test[propertyName] || !test[propertyName].cmds)
    return cb();

  //jxcore.utils.console.info('Executing ' + propertyName + ' steps...');

  var isActual = propertyName === 'actual';
  var cmds = test[propertyName].cmds;
  var cwd = test[propertyName].cwd;

  if (!util.isArray(cmds))
    cmds = [cmds];

  var next = function () {
    var cmd = cmds.shift();
    if (!cmd)
      return cb();

    var options = {};
    if (cwd) {
      if (!fs.existsSync(cwd))
        return cb('Incorrect test[' + propertyName + '].cwd: ' + cwd);
      options.cwd = cwd;
    }

    var child = cp.exec(cmd, options, function (error, stdout, stderr) {
      if (isActual && test.options.memoryUsage)
        test.mem = mem.stop();
      //jxcore.utils.console.log(cmd,"yellow");
      //jxcore.utils.console.log(stdout, "cyan");
      //jxcore.utils.console.log("options", options, "cyan");

      if (error)
        return cb(error);
      else
        process.nextTick(next);
    });

    //if (isActual)
    //jxcore.utils.console.log(test.name, test.define.dir_in, "yellow");
    //jxcore.utils.console.log(test, "yellow");

    //jxcore.utils.console.log(cmd,"yellow");
    if (isActual && test.options.memoryUsage) {
      //jxcore.utils.console.log(cmd,"yellow");
      mem.start(child.pid);
    }
  };

  next();
};


var runActual = function (test, cb) {

  var start = Date.now();
  run(test, "actual", function (err) {
    if (err)
      return cb(err);

    var end = Date.now();
    //jxcore.utils.console.info('Done ' + test.name + ': ' + (end - start), 'cyan');
    cb(null, end - start);
  });
};

exports.run = function (test, cb) {

  //console.log(JSON.stringify(test, null, 4) );

  var cnt = 1;
  if (test.options && test.options.iteration)
    cnt = test.options.iteration;

  var duration = 0;
  var id = cnt;

  //jxcore.utils.console.info('id', id, 'ct', cnt);
  var next = function () {

    if (!id) {
      //jxcore.utils.console.info("iteration", test.name, cnt, "duraion", duration/cnt);
      return cb(null, duration / cnt);
    }

    //console.log('next');

    run(test, "pre", function (err) {
      if (err)
        return cb(err);
      //console.log('cactual');
      runActual(test, function (err1, _duration) {
        if (err1)
          return cb(err1);

        duration += _duration;
        id--;

        //setTimeout(next, 100);
        process.nextTick(next);
      });
    });

    //cnt--;
  };


  next();
};