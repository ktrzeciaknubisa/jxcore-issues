var $uw = process.binding("memory_wrap");

//var input = "sss";
$uw.setSource("test", "sss");
//var output = $uw.readSource("test");

//require('assert').strictEqual(input, output);


var task = {};
task.define = function () {

  var $uw = process.binding("memory_wrap");
  var output = $uw.readSource("test");
  console.log("output", output);
  if (output !== "sss")
    jxcore.utils.console.log("not equal", sss, output);

};

jxcore.tasks.addTask(task);
