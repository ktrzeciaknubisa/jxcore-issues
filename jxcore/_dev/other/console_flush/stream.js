/**
 * Created by nubisa_krzs on 9/14/2015.
 */


var fs = require("fs");
var f = __dirname + "/x.txt";

if (fs.existsSync(f))
  fs.unlinkSync(f);


process.once('drain', function() {
  throw "drained";
  //fs.writeSync(f, "drained " + new Date());
});

console.log(process.stdout.bufferSize, process.stderr.bufferSize);
console.log("osiem");

process.stdout.write("sss");