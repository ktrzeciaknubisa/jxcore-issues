// Copyright & License details are available under JXCORE_LICENSE file


var fs = require('fs');
var path = require('path');

exports.message = fs.readFileSync('./message.txt').toString();

exports.appName = "testApp"
exports.appKey = "NUBISA-STANDARD-KEY-CHANGE-THIS";
exports.ipAddress = "192.168.1.11";
exports.httpServerPort = 8001;

exports.groupName = "myGroup";
exports.response = "response";