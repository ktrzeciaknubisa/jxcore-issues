var cluster = require('cluster');
var http = require('http');
var numCPUs = require('os').cpus().length;

//numCPUs = 1;
if (cluster.isMaster) {
  jxcore.utils.console.log("isMaster", "red");

  if (process.isPackaged) {
    //cluster.setupMaster({ exec : process.execPath, args : process.argv.slice(1)  } )
  }


  // Fork workers.
  for (var i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', function(worker, code, signal) {
    console.log('worker ' + worker.process.pid + ' died');
  });
} else {
  jxcore.utils.console.log("worker start", cluster.worker.process.pid, "cyan");
  //jxcore.utils.console.log("test. worker", cluster.worker, "cyan");
  // Workers can share any TCP connection
  // In this case its a HTTP server
  http.createServer(function(req, res) {
    res.writeHead(200);
    res.end("hello world\n");
    console.log('worker ' + cluster.worker.process.pid + ' received request');
  }).listen(8000);
}