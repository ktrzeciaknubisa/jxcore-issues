#!/bin/bash


jxv8 package index.js -add fff.js
mv index.js index.old
mv fff.js fff.old
jxv8 index.jx
mv index.old index.js
mv fff.old fff.js