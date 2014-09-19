"use strict";
var express = require("express");
var path = require("path");

var app = express();

/*jshint camelcase:false*/
app.set("env", process.env.NODE_ENV || process.env.npm_package_config_env || "development");
app.set("port", process.env.PORT || process.env.npm_package_config_port || 3000);
app.set("https", process.env.HTTPS || process.env.npm_package_config_https || "");
app.disable("x-powered-by");
app.set("trust proxy", ["loopback"]);

//Public
app.use(
    express.static(
        path.join(__dirname, "public"), {
            dotfiles:   "ignore",
            extensions: [],
            index:      "index.html"
        }
    )
);

var http = require("http");
console.log("Express server listening on port " + app.get("port"));
http.createServer(app).listen(app.get("port"));