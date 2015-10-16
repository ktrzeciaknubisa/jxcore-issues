/**
 * Created by Nubisa Inc. on 12/19/13.
 */

// api docs:    http://jxcore.com/docs/jxcore-messaging.html
// tutorials:   http://jxcore.com/messaging-api/

var server = require('jxm');

server.setApplication("Hello World", "/helloworld", "NUBISA-STANDARD-KEY-CHANGE-THIS");

var received = 0;
var last_received = 0;

// this method ("serverMethod") will be called by a client
server.addJSMethod("serverMethod", function (env, params) {
  received++;
  server.sendCallBack(env, params + " World!");
});

server.linkResource("/", ["./index.html", "text/html" ]);
//server.setConfig('socketDisabled', true);
server.setConfig('IPAddress', '192.168.1.11');
//server.setConfig('consoleInfo', true);
server.start();


var interval = setInterval(function() {
  if (last_received === received)
    return;

  server.sendToAll('clientMethod', received);
  last_received = received;
}, 1000);

