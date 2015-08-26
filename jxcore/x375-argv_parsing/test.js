// Copyright & License details are available under JXCORE_LICENSE file


var parsed = jxcore.utils.argv.parse();
console.log(JSON.stringify(parsed, null, 4));

jxcore.utils.console.info("verbose1", jxcore.utils.argv.getValue("verbose1", "all"));
jxcore.utils.console.info("verbosex", jxcore.utils.argv.getValue("verbose1"));
jxcore.utils.console.info("verboseb", jxcore.utils.argv.getBoolValue("verbose"));
jxcore.utils.console.info("verbose2", jxcore.utils.argv.getValue("verbose2", "all"));