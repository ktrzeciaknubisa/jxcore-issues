var assert = require("assert");
var express = require('express');
var fs = require("fs");
var pathModule = require("path");
var http = require("http");

var port = 8000;

var slog = function() {
  console.log.apply(null, arguments);
  cordova('log').call(arguments[0]);
};


// -------------   express server

var app = express();
app.use(function (req, res, next) {

  var path = pathModule.normalize(__dirname + req.url);
  if (fs.existsSync(path)) {

    var stat = fs.statSync(path);
    if (!stat.isFile()) {
      res.send("This is not an asset file.");
      return;
    }
    // sendfile is depreciated
    // new name is sendFile
    var methodName = res.sendFile ? "sendFile" : "sendfile";
    try {
      res[methodName](path);
    } catch (ex) {
      var err = "Exception during " + methodName + "('" + path + "'):\n" + ex;
      slog(err);
      res.send(err);
    }
  } else {
    res.send("This is not an asset file.");
  }
});

app.listen(port, function () {
  slog("Express app listening on port " + port);
});