var fs = require('fs');

Mobile('log').call("JXcore is up and running!");


try {
// requiring a node module
  var jsnice = require('json-nice');

//using it
  var obj = {a: 1, b: 2};
  console.log(jsnice(obj));
} catch(e) {
  console.error("Seems like you didn't copy node_modules folder from sample/jxcore");
}

// execpath
console.log("execPath", process.execPath);

console.log("version", process.jxversion);


// cwd
console.log("process.cwd", process.cwd());

// iOS user directory
console.log("userPath", fs.readdirSync(process.userPath));

console.log("Fs", fs.readFileSync(__dirname + "/node_modules/json-nice/README.md"));