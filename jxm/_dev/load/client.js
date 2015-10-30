/**
 * license (MIT) Copyright Nubisa Inc. 2014
 */


// -------------   init part

var common = require('./common.js');
var assert = require('assert');

var finished = false;
var counters = {
  connected : 0,
  group_received : 0,
  group_sent : 0,
  call_received : 0,
  call_sent : 0
};


var clients = [];
var clients_count = 10;
var message_count = 500;
// each client should receive messages from each other client
var expected_count = clients_count * clients_count * message_count;



process.on('exit', function () {

    console.log('exitting', clients.length);
    for(var o in clients) {
        console.log("dump", id, clients[o].iddd)
        console.log(clients[o]._obj.RequestList)
    }
  //console.trace('exit');
  assert.strictEqual(counters.connected, clients_count, "Not all of the clients was able to connect.");
  assert.strictEqual(counters.group_sent, message_count * clients_count, "Not all of the clients was able to send in group.");
  assert.strictEqual(counters.group_received, expected_count, "Not all of the clients was able to receive in group.");
  assert.strictEqual(counters.call_sent, message_count * clients_count, "Not all of the clients was able to send call.");
  assert.strictEqual(counters.call_received, message_count * clients_count, "Not all of the clients was able to receive call.");

  assert.ok(finished, "Test did not finish!");
});


// -------------   server
var server = require("jxm");

// -------------   client

var customMethods = {
  "client_method": function (client, params) {
    counters.group_received++;
  }
};

for (var id = 0; id < clients_count; id++) {

  var client = server.createClient(customMethods, common.appName, common.appKey, common.ipAddress, common.httpServerPort, false);
  client.iddd = id;
  clients.push(client);

  client.on("connect", function (client) {
    counters.connected++;

    client.Subscribe(common.groupName, function (group) {
      for(var m = 0; m < message_count; m++) {
        client.SendToGroup(common.groupName, "client_method", { id: client.iddd, str: common.message, mid : m });
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
