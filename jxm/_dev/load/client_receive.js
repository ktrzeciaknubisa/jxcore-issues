/**
 * license (MIT) Copyright Nubisa Inc. 2014
 */


// -------------   init part

var common = require('./common.js');
var assert = require('assert');

var finished = false;


var message_count = 1000;
var received = 0;
var connected = false;


process.on('exit', function () {

    console.log('exitting');

    //console.trace('exit');
    //assert.strictEqual(counters.group_sent, message_count * clients_count, "Not all of the clients was able to send in group.");
    //assert.strictEqual(counters.group_received, expected_count, "Not all of the clients was able to receive in group.");
    assert.strictEqual(counters.call_sent, message_count * clients_count, "Not all of the clients was able to send call.");
    //assert.strictEqual(counters.call_received, message_count * clients_count, "Not all of the clients was able to receive call.");
    //
    assert.ok(finished, "Test did not finish!");
});


// -------------   server
var server = require("jxm");

// -------------   client

var customMethods = {
    "client_method": function (client, params) {
        received++;
    }
};


var client = server.createClient(customMethods, common.appName, common.appKey, common.ipAddress, common.httpServerPort, false);

client.on("connect", function (client) {
    connected = true;
    console.log('connected', client.GetClientId())

    client.Call("server_method", null);
});

client.on('error', function (client, err) {
    console.error("client " + client.iddd + " error: " + err);
});

client.Connect();


setInterval(function () {

    //if (!finished)
    //console.log('Call sent: %s, left: %s', sent, Object.keys(client._obj.RequestList.s).length);
    console.log('Call received: %s', received);

    if (received === message_count && !finished) {
        console.log('finished');
        finished = true;
        process.exit();
    }
}, 1000);
