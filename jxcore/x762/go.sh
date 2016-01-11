#!/usr/bin/env bash

HOST=root@192.168.62.204

#rm -rf bsd10
#mkdir -p bsd10

#cp -r /Users/nubisa_krzs/Documents/GitHub/jxcore/tools/npmjx/node_modules ./bsd10/
#cp -r /Users/nubisa_krzs/Documents/GitHub/jxcore/tools/npmjx/npmjx.jxp ./bsd10/
#echo "var targz = require('tar.gz');" > ./bsd10/index.js


#cp -r /Users/nubisa_krzs/Documents/GitHub/jxcore/tools/npmjx/npmjxv310.jx ./
#jxv8 npmjxv310.jx

rm -rf bsd10.zip test2.zip

zip -r -9 bsd10.zip bsd10
zip -r -9 test2.zip test2

scp bsd10.zip $HOST:~/
ssh $HOST unzip -o bsd10.zip

scp test2.zip $HOST:~/
#ssh $HOST rm -rf test2
ssh $HOST unzip -o test2.zip