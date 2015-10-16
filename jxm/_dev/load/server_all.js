/**
 * license (MIT) Copyright Nubisa Inc. 2014
 */


// -------------   init part

var common = require('./common.js');



// -------------   server
var server = require("jxm");
server.setApplication("TestApp", "/" + common.appName, common.appKey);
server.setConfig({ "IPAddress": common.ipAddress, "httpServerPort": common.httpServerPort, console: true, consoleInfo: false, enableClientSideSubscription: true});

var cnt = 0;
var displayed = 0;

server.addJSMethod("server_method", function (env, params) {
  cnt++;
  for (var m = 0; m < 10000; m++) {
    server.sendToAll("client_method");
  }
});

server.start();


setInterval(function() {
  if (displayed === cnt)
    return;

  jxcore.utils.console.log("received", cnt);
  displayed = cnt;
}, 1000);

