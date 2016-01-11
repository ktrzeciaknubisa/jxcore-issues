#!/usr/bin/env bash

BIN=c:/jxcore/jxcore_64v8/Release/jx.exe
#BIN=jxv8

rm -rf out
mkdir -p out
cp -rf ./node_modules/ghost out/
cd out/ghost

$BIN index.js