#!/bin/bash


jxv8 package index.js -add fff.js -native -preinstall "als JX_BINARY"
mv index.js index.old
mv fff.js fff.old
#jxv8 index.jx
rm -rf ./index.installed
./index
mv index.old index.js
mv fff.old fff.js