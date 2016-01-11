#!/usr/bin/env bash

BIN=c:/jxcore/jxcore_64v8/Release/jx.exe
#BIN=jxv8

cd node_modules/ghost

#$BIN package index.js ghost -native --extract-what "*.node,./content" --extract-overwrite --extract-verbose --extract-app-root -slim1 "node_modules/sqlite3" --show-progress percent
$BIN package index.js ghost -native --extract --extract-verbose1 --extract-app-root -slim1 "node_modules/sqlite3" --show-progress percent

rm -rf ../../out
mkdir -p ../../out
mv ghost.exe ../../out/

cd ../../out

#rm -rf content config.js node_modules/sqlite3
ghost.exe