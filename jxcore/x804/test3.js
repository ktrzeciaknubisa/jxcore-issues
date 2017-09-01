// Copyright & License details are available under JXCORE_LICENSE file

var events = require('events');
var cls    = require('continuation-local-storage');
var n      = cls.createNamespace('__NR_tracer');
var ee     = new events.EventEmitter();

function H1() {
  console.log(1);
}

n.bindEmitter(ee);

ee.on('test', H1);
ee.on('test', H1);

var x;
ee._events['test'][1] = x;
ee.emit('test');