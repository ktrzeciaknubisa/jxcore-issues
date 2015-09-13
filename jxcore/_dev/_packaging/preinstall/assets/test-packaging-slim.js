// Copyright & License details are available under JXCORE_LICENSE file


var fs = require("fs");
var path = require("path");

var testErrorWritten = false;

var logError = function() {
  if (!testErrorWritten){
    console.error("TEST ERROR")
    testErrorWritten = true;
  }
  console.error.apply(null, arguments);
};

process.on("exit", function(code) {
  if (code)
    logError("Exiting with code", code);
});

var json_file = path.join(__dirname, "config.json");
if (!fs.existsSync(json_file)) {
  logError("The config.json file does not exists:", json_file);
  process.exit(1);
}

var json_str = fs.readFileSync(json_file).toString();
var json = {};
try {
  json = JSON.parse(json_str);
} catch (ex) {
  logError("Cannot parse json string:");
  logError(json_str);
  process.exit(1);
}


for (var o in json.should_be_readable) {
  if (!json.should_be_readable.hasOwnProperty(o))
    continue;

  var relative_path = json.should_be_readable[o];
  try {
    fs.readFileSync(relative_path).toString();
  } catch(ex) {
    logError("Cannot read file from package:\n\t" + relative_path);
  }
}


for (var o in json.should_not_be_readable) {
  if (!json.should_not_be_readable.hasOwnProperty(o))
    continue;

  var relative_path = json.should_not_be_readable[o];
  try {
    fs.readFileSync(relative_path).toString();
    logError("File should not be readable from package:" + relative_path);
  } catch(ex) {
    // ok
  }
}