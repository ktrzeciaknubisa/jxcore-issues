// Copyright & License details are available under JXCORE_LICENSE file

/*
 This unit is testing how http.setMaxHeaderLength works.
 HTTP client should throw exception when trying to write header bigger than defined limit.

 this unit should be called with two parameters
 > jx test-http-setMaxHeaderLength maxLenght length

 for example we can set maxLength on 5000 and try to send a header with length 4000:
 > jx test-http-setMaxHeaderLength 5000 4000

 if maxLength will be negative, it means that we don't want to call http.setMaxHeaderLength() at all
 */

var jx = require('C:/jxcore/jxcore_32sm/test/node_modules/jxtools');
var assert = jx.assert;
//var assert = require("assert");
var http = require("http");

// reading params from argv
var maxHeaderLength = parseInt(process.argv[process.argv.length - 2]);
var headerlength = parseInt(process.argv[process.argv.length - 1]);

// when 0 or positive
if (maxHeaderLength >= 0) {
  http.setMaxHeaderLength(maxHeaderLength);
} else {
  http.setMaxHeaderLength(32768);
  // default value
  maxHeaderLength = 32768;
}
console.log("max", maxHeaderLength, "len", headerlength);
var buf = new Array(headerlength + 1).join("a");

// maxHeaderLength === 0 disables maxHeaderLength check
var shouldBeNoError = (maxHeaderLength === 0) || maxHeaderLength > headerlength;
var port = 8765 + process.threadId;
var error = false;

// ########   server

var srv = http.createServer(function (req, res) {
  var receivedLength = Buffer.byteLength(req.headers["aaa"]);
  res.writeHead(200, {'receivedlength': receivedLength});
  res.end("ok");
});

srv.on('error', function (e) {
  console.log("srv err", e);
  //jx.throwMT("Server error: \n" + e);
  process.exit(1);
});

srv.on("listening", function () {
  client();
});
srv.listen(port, "localhost");

var done = function() {
  if (shouldBeNoError && !error)
    assert.strictEqual(shouldBeNoError, !error, "There should be an error: 'Request is denied for security reasons'");
  //if (process.subThread)
  //  process.release();
  //else
  process.exit();
};

var finish = function (req) {
  //if (req)
  //  req.abort();
  //setTimeout(function () {
  //  srv.unref();
  //}, 700);
  done();
};

// ########   client

var client = function () {
  var options = {
    hostname: 'localhost',
    port: port,
    path: '/',
    method: 'POST',
    headers: {"aaa": buf.toString()}
  };

  var req = http.request(options, function (res) {
    console.log("req");
    // server has sent size of received header
    assert.equal(res.headers.receivedlength, headerlength, "The length of header received by a server is smaller that expected. Should be " + headerlength + " but is " + res.headers.receivedlength + "\n\n");
    finish(req);
  });

  req.on("error", function (err) {
    error = true;
    console.log("err", err);
    if (shouldBeNoError)
      assert.ok(!!err, "client error!\n" + err);
    finish(req);
  });

  if (!shouldBeNoError)
    jxcore.utils.console.log("Error 'Request is denied for security reasons' expected:", "green");

  req.end();
};

// if done() was not called already...
setTimeout(done, 10000).unref();