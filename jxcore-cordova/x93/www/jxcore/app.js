var fs = require('fs');

if (typeof Mobile !== 'undefined') {
  Mobile('log').call("JXcore is up and running!");

  Mobile('getBuffer').registerSync(function() {
    console.log("getBuffer is called!!!");
    var buffer = new Buffer(25000);
    buffer.fill(45);

    // send back a buffer
    return buffer;
  });

  Mobile('asyncPing').registerAsync(function(message, callback){
    setTimeout(function() {
      callback("Pong:" + message);
    }, 500);
  });
}


if (typeof clog === 'undefined')
  clog = console.log;

var connect = require('connect'),
  directory = './static/';

connect().use(connect.static(directory)).listen(8888);
clog('http server listening on port 8888');