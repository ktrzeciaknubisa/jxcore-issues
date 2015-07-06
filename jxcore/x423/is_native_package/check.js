// Copyright & License details are available under JXCORE_LICENSE file


// scans the file in search o provided testStrings,
// and returns their indexes as array
var binaryFileIndexOf_old = function(file_name, testStrings, verbose) {

  var fs = require("fs");

  if (!fs.existsSync(file_name))
    return;

  if (typeof testStrings === "string")
    testStrings = [ testStrings ];

  var len = testStrings.length;
  var leftToCheck = len;
  var maxLength = 0;
  var minLength = Number.MAX_VALUE;

  var ret = [];

  var testStringLengths = [];
  for(var o = 0; o < len; o++) {
    var l = testStrings[o].length;
    testStringLengths[o] = l;
    ret[o] = -1;
    if (l > maxLength)
      maxLength = l;
    if (l < minLength)
      minLength = l;
  }

  var loc = 0;
  var sz = fs.statSync(file_name);
  var fd = fs.openSync(file_name, "r");
  var buffer = null;
  var chunkSize = 100;
  var _cnt = 0;

  while(true) {
    if (verbose && loc % 32768 == 0) process.stdout.write(".");

    _cnt++;
    buffer = new Buffer(chunkSize);
    fs.readSync(fd, buffer, 0, chunkSize, loc);

    // this is much faster for SM than iterating through buffer chars!
    var str = buffer.toString("utf8");

    for(var o = 0; o < len; o++) {
      if (ret[o] !== -1)
        continue;

      var id = str.indexOf(testStrings[o]);
      if (id !== -1) {
        ret[o] = loc + id;
        jxcore.utils.console.info("found", testStrings[o], loc + id);
        //jxcore.utils.console.info(str, "yellow");
        //leftToCheck--;
        break;
      }
    }

    if (!leftToCheck || loc > sz.size)
      break;

    loc = loc + (chunkSize - maxLength - 1);
    //loc = loc + (chunkSize);
  }

  jxcore.utils.console.info("cnt", _cnt, ", id", ret, "sz.size =", sz.size, ", loc", loc, ", jx size", fs.statSync(process.execPath).size, "maxLEnth", maxLength);
  buffer = null;
  fs.closeSync(fd);
  fd = null;

  return ret;
};

var binaryFileIndexOf = function(file_name, testString, writeDotAt) {

  var fs = require("fs");

  if (!fs.existsSync(file_name))
    throw new Error("Cannot find file for string search: " + file_name);

  var ret = [];
  var testStringLen = testString.length;

  var loc = 0;
  var sz = fs.statSync(file_name);
  var fd = fs.openSync(file_name, "r");
  var buffer = null;
  var chunkSize = 1024 * 8;
  var cnt = 0;
  var ret = -1;

  var chars = [];
  for(var o = 0; o < testStringLen; o++)
    chars.push(testString.charCodeAt(o));

  while(true) {
    if (writeDotAt && loc % writeDotAt == 0) process.stdout.write(".");

    cnt++;
    buffer = new Buffer(chunkSize);
    fs.readSync(fd, buffer, 0, chunkSize, loc);

    // this is much faster for SM than iterating through buffer chars!
    var str = buffer.toString();
    var id = str.indexOf(testString);
    if (id !== -1) {
      // now we know for sure, that the chunk contains the string
      // let's do precise check char by char instead of by string.indexOf()
      // this block should occur just once per entire string occurrence in entire file,
      // so there is no performance penalty here, if teh searched string is unique

      for(var o = 0, len = buffer.length; o < len; o++) {
        if (buffer[o] === chars[0]) {

          var foundCnt = 1;
          for(var a = 1; a < testStringLen; a++) {
            if (buffer[o + a] === chars[a])
              foundCnt++;
            else
              break;
          }

          if (foundCnt === testStringLen) {
            ret = loc + o;
            break;
          }
        }
      }
    }

    if (ret !== -1 || loc > sz.size)
      break;

    // make sure you don't skip the string
    loc += (chunkSize - testStringLen - 1);
  }

  jxcore.utils.console.info("cnt", cnt, ", id", ret, "sz.size =", sz.size, ", loc", loc, ", jx size", fs.statSync(process.execPath).size);
  buffer = null;
  fs.closeSync(fd);
  fd = null;

  return ret;
};


var isNativePackage = function(fname) {

  var id = binaryFileIndexOf(fname, [ "jxcore.bin(?@" + "@!!$<$?!*)", "bin@ry.v@rsion"]);
  return id !== -1;
};

var fname = __dirname + "/" + "index";

console.time("all");

//console.log("isNativePackage", fname, isNativePackage(fname));
//console.log("isNativePackage", process.execPath, isNativePackage(process.execPath));
//console.log("isNativePackage", "/usr/local/bin/jx", isNativePackage("/usr/local/bin/jx"));

fname = "/Users/nubisa_krzs/Documents/GitHub/jxcore/out_v8_64/Release/jx";
//fname = "/Users/nubisa_krzs/Downloads/Archive-2.zip";
//var indexes = binaryFileIndexOf(process.execPath, [ 'bin@ry.v@rsio' + 'n@', 'jxcore.bi' + 'n(?@@' ], 32768);
console.log("opening", fname);
var id = binaryFileIndexOf(fname, 'bin@ry.v@rsio' + 'n@');
console.log("id", id);


console.timeEnd("all");
