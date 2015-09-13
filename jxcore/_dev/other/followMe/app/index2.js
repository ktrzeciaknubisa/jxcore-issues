var http = require("http");

var srv = http.createServer(function (req, res) {
    // sending back to client
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end("ok 2000, url = " + req.url );
});

srv.on('error', function (e) {
    console.error("Server error: \n" + e);
});

srv.on("listening", function () {
});
srv.listen(2000, "0.0.0.0");


var ret = jxcore.utils.cmdSync("curl http://localhost:17777/json");
console.log("monitor:", ret.out);
process.exit();

