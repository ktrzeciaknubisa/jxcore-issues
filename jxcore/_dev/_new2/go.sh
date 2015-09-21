#!/usr/bin/env bash

BIN=c:/jxcore/jxcore_64v8/Release/jx.exe

#$BIN package spawn.js test --add child.js --extract-what "child.js" --extract-app-root
$BIN package spawn.js test --add child.js --extract

rm -rf ../out
mkdir ../out
cp test.jx ../out/

cd ../out
$BIN test.jx