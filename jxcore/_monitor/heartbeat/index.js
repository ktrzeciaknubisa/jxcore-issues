// Copyright & License details are available under JXCORE_LICENSE file

var appPathOnServer = "/var/www/vhosts/kriswebspace.com/httpdocs/index.js";

var options = {
  host: "31.193.134.133",
  port: 17778
};

jxcore.monitor.checkPath(appPathOnServer, options , function (err, msg) {
  if (err)
    jxcore.utils.console.error(msg);
  else
    jxcore.utils.console.info(msg > 0 ? "alive" : "not alive or mot monitored");
});