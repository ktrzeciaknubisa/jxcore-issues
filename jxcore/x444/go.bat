#!/bin/bash


jxv8 package index.js -add package.json -native

rm -rf copy
mkdir copy
mv *.js *.json copy/

#jxv8 index.jx
./index

mv copy/* ./

#mv index.js index.old
#mv fff.js fff.old
#jxv8 index.jx
#mv index.old index.js
#mv fff.old fff.js