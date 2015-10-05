#!/bin/sh

BIN=jxv8
BIN=c:/jxcore/jxcore_64v8/Release/jx.exe

rm -rf jxcore-addon
git clone https://github.com/jxcore/jxcore-addon

cd jxcore-addon
$BIN install
#$BIN C:/Users/nubisa_krzs/.jx/npm/node_modules/node-gyp/bin/node-gyp.js rebuild
$BIN package test.js -add -native

test.exe
#./test

echo exit code from test.exe $?

$BIN test.js
echo exit code from jx test.js $?

#mv test.exe "test"
#./test
#echo exit code from ./test $?

cd ..