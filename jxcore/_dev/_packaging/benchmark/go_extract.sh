#!/bin/bash

BIN=jxsm
BIN=../jx

# jxcore-cordova
#TESTDIR=/Users/nubisa_krzs/Documents/GitHub/jxcore-cordova-release/tmp/io.jxcore.node

# ghost
TESTDIR=/Users/nubisa_krzs/Documents/GitHub/ktrzeciaknubisa/jxcore-issues/jxcore/_dev/_packaging/benchmark/node_modules/ghost

# jxcore
#TESTDIR=/Users/nubisa_krzs/Documents/GitHub/ktrzeciaknubisa/jxcore-binary-packaging

#CMD="jxsm package index.js --show-progress percent"
CMD="$BIN package index.js testApp -slim "*.jx,*.jxp" --show-progress percent --extract"
#CMD="jxsm package index.js testApp -slim "*.jx,*.jxp" --show-progress percent --compress-entire1"

rm -rf ./temp/ ./out
mkdir -p ./temp/ ./out
cp -r $TESTDIR/* ./temp/
cp index.js ./temp/
cd ./temp/

$CMD

mv testApp.jx ../out
cd ../out

START_TIME=$SECONDS
TOTAL=1
for (( c=1; c<=$TOTAL; c++ )) do
  $BIN testApp.jx
  mv testApp testAppOld$c
done

ELAPSED_TIME=$(($SECONDS - $START_TIME))
ELAPSED_TIME=$(($ELAPSED_TIME / $TOTAL))

echo elapsed $ELAPSED_TIME


ls -al testApp.jx

echo all files
find ../out/testAppOld1/ -type f | wc -l

echo js files
find ../out/testAppOld1/ -type f -name "*.js" | wc -l