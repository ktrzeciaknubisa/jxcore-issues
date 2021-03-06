var fs = require('fs');

cordova('log').call("JXcore is up and running!");

cordova('log').call("process.isPackaged: " + process.isPackaged);
cordova('log').call("process.isEmbedded: " + process.isEmbedded);
cordova('log').call("process._EmbeddedSource: " + process._EmbeddedSource);
cordova('log').call("!process.isEmbedded && !process._EmbeddedSource: " + (!process.isEmbedded && !process._EmbeddedSource));


cordova('getBuffer').registerSync(function() {
  console.log("getBuffer is called!!!");
  var buffer = new Buffer(25000);
  buffer.fill(45);

  // send back a buffer
  return buffer;
});

cordova('asyncPing').registerAsync(function(message, callback){
  setTimeout(function() {
    callback("Pong:" + message);
  }, 500);
});

try {
// requiring a node module
  var jsnice = require('json-nice');

//using it
  var obj = {a: 1, b: 2};
  console.log(jsnice(obj));
} catch(e) {
  console.error("Seems like you didn't copy node_modules folder from sample/jxcore");
}

// execpath
console.log("execPath", process.execPath);

// cwd
console.log("process.cwd", process.cwd());

// iOS user directory
console.log("userPath", fs.readdirSync(process.userPath));

cordova('fromJXcore').registerToNative(function(param1, param2){
  // this method is reachable from Java or ObjectiveC
  // OBJ-C : [JXcore callEventCallback:@"fromJXcore" withParams:arr_parms];
  // Java  : jxcore.CallJSMethod("fromJXcore", arr_params);
});

// calling this custom native method from JXcoreExtension.m / .java
cordova('ScreenInfo').callNative(function(width, height){
  console.log("Size", width, height);
});

cordova('ScreenBrightness').callNative(function(br){
  console.log("Screen Brightness", br);
});


