// Copyright & License details are available under JXCORE_LICENSE file


var npm = require("npm");
npm.load({
  loaded: false
}, function (err) {
  // catch errors
  npm.commands.install(["semver"], function (er, data) {
    // log the error or data
    if (err)
      jxcore.utils.console.error(er, data);
    else
      jxcore.utils.console.info(data);
  });
  npm.on("log", function (message) {
    // log the progress of the installation
    console.log(message);
  });
});