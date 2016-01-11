// Copyright & License details are available under JXCORE_LICENSE file

var singleGroup = require(__dirname + '/singleGroup.js');
var dur = require(__dirname + '/duration.js');

exports.run = function (groups, cb) {

  var _cb = function (err, ret) {
    if (err)
      return cb(err);

    jxcore.utils.console.log(dur.toString(ret.duration), 'yellow');
    jxcore.utils.console.log(ret.mem);

    process.nextTick(function () {
      exports.run(groups, cb);
    });
  };

  var gr = groups.shift();
  if (gr) {
    console.log("running group", gr.name);
    singleGroup.run(gr, _cb);
  }
  else {
    cb && cb();
  }
};