// Copyright & License details are available under JXCORE_LICENSE file


var Git = require("nodegit");

Git.Clone("https://github.com/nodegit/nodegit", "nodegit").then(function(repository) {
  console.log(repository);
});