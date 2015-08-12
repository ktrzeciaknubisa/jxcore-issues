

//console.log("process.__npmjxpath", process.__npmjxpath);
//console.log("process.env.HOME", process.env.HOME);
//console.log("process.env.HOMEPATH", process.env.HOMEPATH);
//console.log("process.env.USERPROFILE", process.env.USERPROFILE);


var fs = require("fs");

var dir = __dirname + "/dir";
if (!fs.existsSync(dir)) {
  //console.log("creating dir");
  fs.mkdirSync(dir);
} else {
  console.log("dir exists");
}

fs.writeFileSync(dir + "/file2.txt", "");


try {
  fs.mkdirSync(dir);
} catch (ex) {
}