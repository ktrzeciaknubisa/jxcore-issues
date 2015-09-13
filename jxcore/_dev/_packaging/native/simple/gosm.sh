#!/bin/bash


jxsm package index.js -add fff.js
mv index.js index.old
mv fff.js fff.old
jxsm index.jx
mv index.old index.js
mv fff.old fff.js