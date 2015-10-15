/**
 * license (MIT) Copyright Nubisa Inc. 2014
 */

var jx_commmon = require("./jx-common-simple.js"),
  console = jx_commmon.console,
  assert = jx_commmon.assert;

// -------------   init part

var appName = jx_commmon.getAppName();
var appKey = "NUBISA-STANDARD-KEY-CHANGE-THIS";
var ipAddress = "localhost";
var httpServerPort = 8001;

var finished = false;
var counters = {
  connected : 0,
  group_received : 0,
  group_sent : 0,
  call_received : 0,
  call_sent : 0
};

var clients_count = 10;
var message_count = 500;
// each client should receive messages from each other client
var expected_count = clients_count * clients_count * message_count;

var groupName = "myGroup";
var response = "response";

var message = jx_commmon.unicodeStrings.join(',');


var checkArray = function (arr, errMessage, checkDeep) {
  var error_ids = [];
  for (var a = 0; a < clients_count; a++) {
    if (!arr[a]) {
      error_ids.push(a);
    }
    if (checkDeep) {
      for (var b = 0; b < clients_count; b++) {
        if (!arr[a][b]) {
          error_ids.push(a + ":" + b);
        }
      }
    }
  }
  assert.strictEqual(error_ids.length, 0, errMessage + error_ids.join(","));
};


process.on('exit', function () {
  //console.trace('exit');
  assert.strictEqual(counters.connected, clients_count, "Not all of the clients was able to connect.");
  assert.strictEqual(counters.group_sent, message_count * clients_count, "Not all of the clients was able to send in group.");
  assert.strictEqual(counters.group_received, expected_count, "Not all of the clients was able to receive in group.");
  assert.strictEqual(counters.call_sent, message_count * clients_count, "Not all of the clients was able to send call.");
  assert.strictEqual(counters.call_received, message_count * clients_count, "Not all of the clients was able to receive call.");

  assert.ok(finished, "Test did not finish!");
});


// -------------   server
var server = require("./../../backend/jxm.js");
server.setApplication("TestApp", "/" + appName, appKey);
server.setConfig({ "IPAddress": ipAddress, "httpServerPort": httpServerPort, console: false, consoleInfo: false, enableClientSideSubscription: true});

server.addJSMethod("server_method", function (env, params) {
  server_received = true;
  server.sendCallBack(env, response);
});

server.start();

// -------------   client

var customMethods = {
  "client_method": function (client, params) {
    counters.group_received++;
  }
};

for (var id = 0; id < clients_count; id++) {

  var client = server.createClient(customMethods, appName, appKey, ipAddress, httpServerPort, false);
  client.iddd = id;

  client.on("connect", function (client) {
    counters.connected++;

    client.Subscribe(groupName, function (group) {
      for(var m = 0; m < message_count; m++) {
        client.SendToGroup(groupName, "client_method", { id: client.iddd, str: message, mid : m });
        counters.group_sent++;
      }
    });

    for(var m = 0; m < message_count; m++) {
      client.Call("server_method", null, function(str) {
        counters.call_received++;
      });

      counters.call_sent++;
    }
  });

  client.on('error', function (client, err) {
    console.error("client " + client.iddd + " error: " + err);
  });

  client.Connect();

}


setInterval(function() {
  console.log('Group send: %s, received: %s, Call sent: %s, received: %s', counters.group_sent, counters.group_received, counters.call_sent, counters.call_received);

  if (counters.group_received == expected_count && counters.call_sent === counters.call_received) {
    finished = true;
    process.exit();
  }
}, 1000);

