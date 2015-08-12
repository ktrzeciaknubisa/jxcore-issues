#!/bin/bash


jxv8 package index.js -add fff.js -native
mv index.js index.old
mv fff.js fff.old
#jxv8 index.jx
./index
mv index.old index.js
mv fff.old fff.js