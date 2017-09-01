#!/usr/bin/env bash

rm -rf test1
cp -r node-dtrace-provider test1


cd test1

#cp /usr/local/bin/node ./nodex
#chmod +x nodex

jx install --node-gyp=/Users/nubisa_krzs/.jx/npm/node_modules/node-gyp/bin/node-gyp.js
#node2 ~/.jx/npm/lib/npm.js install
#./nodex /usr/local/lib/node_modules/npm/bin/npm-cli.js  install
#node2 /usr/local/lib/node_modules/npm/lib/npm.js  install
#npm install