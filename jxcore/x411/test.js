// Copyright & License details are available under JXCORE_LICENSE file


var net = require("net");

var server = net.createServer(function(incomingClientSocket) {
  console.log("We have a incomingClientSocket connection!");

  incomingClientSocket.on('end', function() {
    console.log("We lost a incomingClientSocket connection.");
  });

  //incomingClientSocket.on('data', function(data) {
    //BUGBUG: On the desktop this event listener is not necessary. But on JXCore on Android
    //we have to include this handler or no data will ever arrive at the server.
  //});

  incomingClientSocket.pipe(incomingClientSocket);
});

server.listen(1134);


var client = net.createConnection(1134);
client.on('end', function() {
  console.log("client end");
  server.close();
});

// IF YOU DONT ENABLE BELOW, APP WILL RUN FOREVER
client.on('data', function(data){
  console.log("!! on client data",  data.length)
})

var ss = require("fs").createReadStream(__dirname + "/file.txt");

ss.on('end', function() {
  console.log("ss end");
  client.end();
});

//client.write("hi");
//client.end();

ss.pipe(client);
//client.pipe(ss);
//ss.close();