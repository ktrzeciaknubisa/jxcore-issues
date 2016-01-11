// Copyright & License details are available under JXCORE_LICENSE file

var arr = [ './index2.js', './file.xml', './' + require('path').basename(__filename) ];


for(var o in arr)
  console.log('resolved ', arr[o], ':', require.resolve(arr[o]));