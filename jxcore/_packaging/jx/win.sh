#!/bin/bash


c:/jxcore/jxcore_64v8/Release/jx.exe package index.js -add "package.json,test,build"

rm -rf copy
mkdir copy
mv *.js *.json test build copy/

c:/jxcore/jxcore_64v8/Release/jx.exe index.jx
# ./index

mv copy/* ./

#mv index.js index.old
#mv fff.js fff.old
#jxv8 index.jx
#mv index.old index.js
#mv fff.old fff.js