// Copyright & License details are available under JXCORE_LICENSE file


var repl = require('repl');

// Extend the initial repl context.
r = repl.start({});
//someExtension.extend(r.context);

// When a new context is created extend it as well.
r.on('reset', function (context) {
  console.log('repl has a new context');
  //someExtension.extend(context);
});

