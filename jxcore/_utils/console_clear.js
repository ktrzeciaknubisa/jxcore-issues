// Copyright & License details are available under JXCORE_LICENSE file

var n = 10;

while(n--)
  console.log("line",n);

jxcore.utils.console.write("a dlkjdkaskhakshkahkaska");

//jxcore.utils.console.log('\033[2J');
//jxcore.utils.console.write('\33c');
//jxcore.utils.console.write('\033[3J');
//jxcore.utils.console.write('\033c');
jxcore.utils.console.write('\033c\033[3J');
jxcore.utils.console.log("cleared");
