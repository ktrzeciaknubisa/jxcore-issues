#!/usr/bin/env node

'use strict';

var program = require('commander');
var version = require('./node_modules/commander/package.json').version;

console.log(version);
console.log(process.argv);

program
  .version(version)
  .parse(process.argv);