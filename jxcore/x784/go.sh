#!/usr/bin/env bash

BIN=jxv8
#BIN=jx237
#BIN=jx307v8
#BIN=jx304v8
#BIN=jx310v8


#$BIN package index.js -add dir --extract --extract-app-root --fs_reach_sources:true
$BIN package index.js -add -native --library false

$BIN package index2.js -add --library false
$BIN package index3.js -add


rm -rf ../out
mkdir -p ../out
cp index ../out
cp index*.jx ../out
cd ../out

./index
#$BIN index.jx

#pm2 start index