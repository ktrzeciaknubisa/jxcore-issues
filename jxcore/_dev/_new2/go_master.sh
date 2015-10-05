#!/usr/bin/env bash

BIN=c:/jxcore/jxcore_64v8/Release/jx.exe

./go.sh

echo ""
echo "running 1 master.js"
$BIN master.js
echo "from 1 master.js $?"