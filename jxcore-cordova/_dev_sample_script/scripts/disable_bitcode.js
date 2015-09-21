#!/usr/bin/env jx

// Copyright & License details are available under JXCORE_LICENSE file

var fs = require('fs');
var path = require('path');

// rootdir points to "platforms"
var rootdir = process.argv[2];
if (!rootdir)
  process.exit();


function getProjectName() {
  var cfgPath = path.join(rootdir, "..", 'config.xml');

  var xml = fs.readFileSync(cfgPath, 'utf-8');
  var r = /<name>([\s\S]*)<\/name>/mi.exec(xml);

  return r[1].trim();
}

var pbxprojPath = path.join(rootdir, 'ios', getProjectName() + ".xcodeproj" , 'project.pbxproj');

var pbxproj = fs.readFileSync(pbxprojPath, 'utf8');

if (pbxproj.indexOf("ENABLE_BITCODE") === -1) {
  var src = 'buildSettings = {';
  var dst = src + "\nENABLE_BITCODE = NO;\n";
  var result = pbxproj.replace(new RegExp(src, "g"), dst);
  fs.writeFileSync(pbxprojPath, result, 'utf8');
}

