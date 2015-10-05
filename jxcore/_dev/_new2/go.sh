#!/usr/bin/env bash

BIN=c:/jxcore/jxcore_64v8/Release/jx.exe

#$BIN package spawn.js test --add child.js --extract-what "child.js" --extract-app-root
$BIN package spawn.js --add child.js --extract

rm -rf ../out
mkdir ../out
cp spawn.jx ../out/

cd ../out

echo ""
echo "running out/spawn.jx"
$BIN spawn.jx
echo "spawn jx from go.sh (out dir) $?"