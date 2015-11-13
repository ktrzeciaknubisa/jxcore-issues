// Copyright & License details are available under JXCORE_LICENSE file


var number64ToBuffer = function (number) {

  //number = number.toString(16);
  //return Buffer([
  //  number >> 56 & 255,
  //  number >> 48 & 255,
  //  number >> 40 & 255,
  //  number >> 32 & 255,
  //  number >> 24 & 255,
  //  number >> 16 & 255,
  //  number >> 8 & 255,
  //  number & 255,
  //]);

  //return Buffer([
  //    number >> 24 & 255,
  //    number >> 16 & 255,
  //    number >> 8 & 255,
  //    number & 255,
  //]);



  return Buffer([
    number >> 32,
    number >> 24,
    number >> 16,
    number >> 8,
  ]);
};


var bufferToNumber64 = function (buf) {

  //var ret =
  //  (buf[0] << 56) +
  //  (buf[1] << 48) +
  //  (buf[2] << 40) +
  //  (buf[3] << 32) +
  //  (buf[4] << 24) +
  //  (buf[5] << 16) +
  //  (buf[6] << 8) +
  //  buf[7];
  //
  //var ret =
  //  (buf[0] << 64) +
  //  (buf[1] << 56) +
  //  (buf[2] << 48) +
  //  (buf[3] << 40) +
  //  (buf[4] << 32) +
  //  (buf[5] << 24) +
  //  (buf[6] << 16) +
  //  (buf[7] << 8);


  var ret =
    (buf[0] << 32) +
    (buf[1] << 24) +
    (buf[2] << 16) +
    (buf[3] << 8);

  console.log('ret', ret);

  return ret;
};


var KB = 1024;
var MB = 1024 * KB;
var GB = 1024 * MB;

var n1 = parseInt(1.6 *GB);

var buf = number64ToBuffer(n1);

var n2 = bufferToNumber64(buf);


jxcore.utils.console.info(buf[0] << 32 + 0,buf[0] << 24);

console.log(n1, n2, buf, buf.length);
//console.log(1024 >> 8);


require('assert').strictEqual(n1,n2);