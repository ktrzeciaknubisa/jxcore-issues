var ret = { isEmbedded : process.isEmbedded, isPackaged: process.isPackaged, info: jxcore.utils.OSInfo() };
cordova('log').call("JXcore is up and running! "  + JSON.stringify(ret, null, 4) );






cordova('log').call("JXcore is up and running 31!");
cordova('log').call("JXcore is up and running 32!");

cordova('getBuffer').registerSync(function () {

  var test = require("./test.jx");
  var fs = require('fs');
  var path = require('path');
  console.log("__dirname", __dirname);

  var files = fs.readdirSync(__dirname);
  console.log("files", files);

  var gz = fs.readFileSync(path.join(__dirname, 'text.gz')).toString();
  console.log(gz);
  console.log("getBuffer is called!!!");
  var buffer = new Buffer(25000);
  buffer.fill(45);

  // send back a buffer
  return buffer;
});

cordova('asyncPing').registerAsync(function (message, callback) {
  setTimeout(function () {
    callback("Pong:" + message);
  }, 500);
});
