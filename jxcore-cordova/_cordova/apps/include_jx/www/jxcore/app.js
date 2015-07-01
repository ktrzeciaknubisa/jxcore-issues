try {
  cordova('log').call("engine = " + process.versions.sm ? "sm" : "v8");
  cordova('log').call("date = " + Date.now());
  var msg = require('./mymodule.jx');
  cordova('log').call(msg());
} catch (ex) {
  cordova('log').call(ex.toString());
}
