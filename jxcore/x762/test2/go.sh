#!/usr/bin/env bash

BIN=~/Github/jxcore/out_v8_64/Release/jx

DIR=123456789_123456789_123456789_123456789_123456789_123456789_123456789_123456789_123456789_12345
DIR=123456789_123456789_123456789_123456789_123456789_123456789_123456789_123456789_12345

rm -rf app
mkdir -p app/$DIR
cd app

echo "console.log('file')" > $DIR/file.js
echo "require('./$DIR/file.js');" > index.js

$BIN index.js
cd ..
