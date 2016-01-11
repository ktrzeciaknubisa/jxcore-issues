/**
 * Created by nubisa_krzs on 10/5/2015.
 */

//var fs = require('fs');
//
//fs.writeFileSync('./test.txt', 'alo alo');
//console.log('ok');
//
var hide = false;
var cnt = 0;
setInterval(function() {
  hide = !hide;
  if (hide) {
    console.log("hide", cnt++);
    jxcore.utils.HideWindow();
  } else {
    jxcore.utils.ShowWindow();
    console.log("show", cnt++);
  }

}, 2000);