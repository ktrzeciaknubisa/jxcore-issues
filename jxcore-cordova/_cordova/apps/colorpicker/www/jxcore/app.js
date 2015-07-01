
var color = 'white';
var port = 2000;
var ips = [];

cordova('getColor').registerSync(function () {
  return color;
});


cordova('getIP').registerAsync(function (message, callback) {
  if (ips.length)
    callback(ips.join("<br>"));

  var os = require('os');
  var interfaces = os.networkInterfaces();

  for (var o in interfaces) {
    for (var i in interfaces[o]) {
      if (interfaces[o][i].family == "IPv4" && !interfaces[o][i].internal)
        ips.push('http://' + interfaces[o][i].address + ":" + port);
    }
  }

  createServer();

  callback(ips.join("<br>"));
});

// http server for serving color picker page from iOS

var anim_test = null;

var createServer = function() {
  var http = require("http");
  var path = require("path");
  var fs = require('fs');


  var srv = http.createServer(function (req, res) {

    // request for Color Picker page
    if (req.url === "/") {
      res.writeHead(200, {'Content-Type': 'text/html'});

      if (!anim_test)
        anim_test = fs.readFileSync(path.join(__dirname, "anim_test.html")).toString();

      res.end(anim_test);
    }

    // The color chosen with Color Picker is sent from client by ajax call
    var str = "/color.html?value=";
    if (req.url.indexOf(str) === 0) {
      color = "#" + req.url.replace(str, "");
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end("OK");

      cordova('setColor').call(color);
    }
  });

  srv.on('error', function (e) {
    console.error("Server error: \n" + e);
  });

  srv.on("listening", function () {
    console.log("HTTP server listening on port " + port);
  });
  srv.listen(port, "0.0.0.0");
};
