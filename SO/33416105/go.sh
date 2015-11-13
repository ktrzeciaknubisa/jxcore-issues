#!/usr/bin/env bash

clear
BINV8=c:/jxcore/jxcore_64v8/Release/jx.exe
BINSM=c:/jxcore/jxcore_64sm/Release/jx.exe

$BINV8 package index.js test -add index.js -native
$BINSM package index.js testsm -add index.js-native

echo "# jxcore v8"
$BINV8 index.js
echo

echo "# jxcore sm"
$BINSM index.js
echo

echo "# jxcore package v8"
test.exe
echo

echo "# jxcore package sm"
testsm.exe
echo

echo "# node v0.10.38"
node index.js
echo

echo "# node v0.12.2"
"C:\Program Files (x86)\nodejs\node_0.12.2_x64" index.js
