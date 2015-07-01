// Copyright & License details are available under JXCORE_LICENSE file


var host = null;
var port = null;
var https = null;
var hostSame = null;
var portSame = null;
var allSame = null;
var hb = null;

var _https = require("https");

exports.dedicated = null;


var dump = function() {
  var obj = { host: host, port: port, hostSame: hostSame, portSame: portSame, allSame : allSame };
  jxcore.utils.console.log("obj", obj, "yellow");
};

var heartbeat = function(config) {





  this.startHeartBeatServer = function() {



  };

};



var warn = function(str) {
  return jxcore.utils.console.setColor(str, "magenta");
};

var checkConfig = function(config) {
  var cfg = config.monitor;
  hb = config.monitor.heartbeat;

  if (!hb)
    return;

  host = hb.host || cfg.host;
  port = hb.port || cfg.port;
  https = hb.https || cfg.https;

  hostSame = host === cfg.host;
  portSame = port === cfg.port;
  allSame = host + ":" + port === cfg.host + ":" + cfg.port;
  var strDisabled = jxcore.utils.console.setColor("The heartbeat feature is not active:\n", "red");


  if (allSame) {
    if (!cfg.https) {
      var str = "Monitor HeartBeat feature can work only through HTTPS.\n";
      if (!hb.dedicated)
        return strDisabled + warn(str +
          "Since Monitor is running on HTTP, the heartbeat cannot be used unless monitor is configured for HTTPS " +
          "or heartbeat has `dedicated` option enabled.");

      // dedicated
      if (!https)
        return strDisabled + warn(str + "The HTTPS settings were not found in config file.");

      // heartbeat is dedicated and https setting are defined
      return strDisabled + warn("You need to provide separate port number for the HeartBeat feature.");
    }


    else {
      // monitor works on https
    }



    return true;
  }

  if (portSame)
    return strDisabled + warn("You cannot use the same port for the HeartBeat feature as for the Monitor." +
      "Please provide separate port for");

  return true;
};

/**
 *
 * @param config
 */
exports.heartbeat = function(config) {

  if (!config || ! config.monitor)
    throw new Error("Invalid heartbeat initialisation.");

  var check = checkConfig(config);
  if (typeof check === "string")
    return check;

  if (check === true) {
    exports.dedicated = hb.dedicated;
    dump();
  }

  return check;
};