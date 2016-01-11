#!/usr/bin/env bash

BIN=c:/jxcore/jxcore_64v8/Release/jx.exe
#BIN=jxv8

rm -rf out
mkdir -p out/node_modules
cp -rf ./node_modules/ghost/node_modules/bluebird out/node_modules/
cp ./node_modules/ghost/index.js out/
cd out

$BIN index.js