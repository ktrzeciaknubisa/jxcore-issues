// Copyright & License details are available under JXCORE_LICENSE file


exports.startSocketServer = function(port) {
  var server = net.createServer(function(incomingClientSocket) {
    console.log("We have a incomingClientSocket connection!");

    //incomingClientSocket.on('end', function() {
    //  console.log("We lost a incomingClientSocket connection.");
    //});

    incomingClientSocket.pipe(incomingClientSocket);
  });

  server.listen(port);

  return server;
};