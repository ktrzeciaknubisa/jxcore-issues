// Copyright & License details are available under JXCORE_LICENSE file

var n = 10;

while(n--)
  console.log("line",n);

jxcore.utils.console.write("a dlkjdkaskhakshkahkaska");

//jxcore.utils.console.log('\033[2J');
//jxcore.utils.console.write('\33c');
//jxcore.utils.console.write('\033[3J');
//jxcore.utils.console.write('\033c');
//jxcore.utils.console.write('\033c\033[3J');

setTimeout(function() {

  jxcore.utils.console.clear();
  jxcore.utils.console.clear("osiem", "magenta+clear");
  //jxcore.utils.console.log("the screen has been just cleared", "clear+bold+red");

}, 1000);


var s = jxcore.utils.console.setColor("osiem" ,"clear+red");
var ss = jxcore.utils.console.removeColors(s);
//console.log("s", s);
console.log();
console.log("ss", ss);