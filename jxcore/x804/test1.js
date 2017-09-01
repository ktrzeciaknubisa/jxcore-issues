// Copyright & License details are available under JXCORE_LICENSE file

var EventEmitter = require('events').EventEmitter;
var wrapEmitter = require('emitter-listener');

var ee = new EventEmitter();

var id = 0;

wrapEmitter(
  ee,
  function mark(listener) {
    listener.id = id++;
    console.log('mark called');
  },
  function prepare(listener) {
    console.log('listener id is %d', listener.id);
  }
);


ee.on('start', function() {
  jxcore.utils.console.info('start called')
  ee.emit('end');
});


ee.on('end', function() {
  jxcore.utils.console.info('end called')
});


setTimeout(function() {
  ee.emit('start');
  //ee.emit('end');

  ee.removeListener('end', function() {
    jxcore.utils.console.info('removing');
  })
}, 500)

