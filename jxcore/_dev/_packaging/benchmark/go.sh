#!/bin/bash

BIN=jxsm
#BIN=../jx

# jxcore-cordova
#TESTDIR=/Users/nubisa_krzs/Documents/GitHub/jxcore-cordova-release/tmp/io.jxcore.node

# ghost
#TESTDIR=/Users/nubisa_krzs/Documents/GitHub/ktrzeciaknubisa/jxcore-issues/jxcore/_dev/_packaging/benchmark/node_modules/ghost

# jxcore
TESTDIR=/Users/nubisa_krzs/Documents/GitHub/ktrzeciaknubisa/jxcore-binary-packaging

#CMD="jxsm package index.js --show-progress percent"
CMD="$BIN package index.js testApp -slim "*.jx,*.jxp" --show-progress percent --compress-double"

rm -rf ./temp/
mkdir -p ./temp/
cp -r $TESTDIR/* ./temp/
touch ./temp/index.js
cd ./temp/

START_TIME=$SECONDS
TOTAL=3
for (( c=1; c<=$TOTAL; c++ )) do
  $CMD
done

ELAPSED_TIME=$(($SECONDS - $START_TIME))
ELAPSED_TIME=$(($ELAPSED_TIME / $TOTAL))

echo elapsed $ELAPSED_TIME


ls -al testApp.jx
