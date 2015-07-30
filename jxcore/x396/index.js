/**
 * Created by nubisa_krzs on 7/30/2015.
 */

var jade = require('jade')
  , path = __dirname + '/text.jade'
  , str = require('fs').readFileSync(path, 'utf8')
  , fn = jade.compile(str, { filename: path, pretty: true });

console.log(fn({ name: 'tj', email: 'tj@vision-media.ca' }));