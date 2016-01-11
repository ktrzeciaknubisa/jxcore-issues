// Copyright & License details are available under JXCORE_LICENSE file


exports.toString = function (ms) {

  ms = parseInt(ms);
  if (isNaN(ms))
    return "Invalid number: ms";

  var s = '';
  s += ms + ' ms';
  s += ' = ' + (ms / 1000).toFixed(2) + ' sec';

  return s;
}