jxcore.utils.console.info(process.versions.sm ? "SM" : "V8", process.arch);

var http = require("http");
var maxHeaderLength = parseInt(process.argv[2]);
http.setMaxHeaderLength(maxHeaderLength);
// the header will be bigger than the limit to trigger the limit check
var buf = new Array(maxHeaderLength + 1).join("a");
var port = 8765;

// ########   server

var srv = http.createServer(function (req, res) {
  res.end("ok");
}).on('error', function (e) {
  console.error(e);
}).on("listening", function () {
  client();
}).listen(port, "localhost");


// ########   client

var client = function () {
  var options = {
    hostname: 'localhost',
    port: port,
    path: '/',
    method: 'POST',
    headers: {"aaa": buf.toString()}
  };
  console.log("client start");
  var req = http.request(options, function (res) {
    jxcore.utils.console.log("Socket should hang up!", "red");
    process.exit();
  }).on("error", function (err) {
    jxcore.utils.console.warn("err", err);
    process.exit();
  }).end();
};