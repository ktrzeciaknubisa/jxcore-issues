#!/usr/bin/env bash

BIN=jxv8
BIN=c:/jxcore/jxcore_64v8/Release/jx.exe
#BIN=c:/jxcore/jxcore_64v8/Release/jx.exe
#BIN=jx

$BIN package project.js -native -slim ref

#$BIN project.js

rm -rf ../out
mkdir -p ../out
cp project.exe ../out
cp -r node_modules ../out
cd ../out
project.exe

