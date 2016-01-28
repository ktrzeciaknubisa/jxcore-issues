// Copyright & License details are available under JXCORE_LICENSE file


var cp = require('child_process');
var path = require('path');

// JX_NODE_GYP_OVERRIDE
process.env["JX_NODE_GYP_OVERRIDE"] = '/Users/nubisa_krzs/.jx/npm/node_modules/node-gyp/bin/node-gyp.js'
process.env["JX_NODE_GYP_OVERRIDE_VERBOSE"] = true

//cp.spawn(process.execPath, ['test-nodegyp.js'], { stdio : "inherit" });
var p = '/Users/nubisa_krzs/Documents/GitHub/ktrzeciaknubisa/jxcore-issues/jxcore/_dev/npm/dev/node_modules/node-gyp/bin/node-gyp.js';
cp.spawn(process.execPath, [p], { stdio : "inherit" });