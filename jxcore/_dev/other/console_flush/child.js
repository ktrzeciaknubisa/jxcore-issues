/**
 * Created by nubisa_krzs on 9/13/2015.
 */


var cnt = 0;

var test = function() {
  cnt++;
  console.log("child output", cnt);
  if (cnt > 10)
    process.exit();
  setTimeout(test, 1);
};

test();