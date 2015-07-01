var jxutil = process.binding("jxutils_wrap");


var command = "mkdir Эа_эжт_аляквюид\\test";
//command = '"chcp 65001 | cmd.exe /u /s /c  ' + command + '"';
//command = '"chcp 65001 | ' + command + '"';
command = '"' + command + '"';

console.log("command", command);
var arr = jxutil.execSync(command + ' 2<&1');
console.log("output:", arr[0]);