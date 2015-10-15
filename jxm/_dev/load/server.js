/**
 * license (MIT) Copyright Nubisa Inc. 2014
 */


// -------------   init part

var common = require('./common.js');



// -------------   server
var server = require("jxm");
server.setApplication("TestApp", "/" + common.appName, common.appKey);
server.setConfig({ "IPAddress": common.ipAddress, "httpServerPort": common.httpServerPort, console: true, consoleInfo: false, enableClientSideSubscription: true});

server.addJSMethod("server_method", function (env, params) {
  server.sendCallBack(env, common.response);
});

server.start();

