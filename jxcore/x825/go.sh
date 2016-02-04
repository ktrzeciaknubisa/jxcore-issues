#!/usr/bin/env bash

BIN=c:/jxcore/jxcore_64sm/Release/jx.exe

$BIN package index.js --native --library false --extract-what "*.node" --extract-app-root

rm -rf ../out
mkdir -p ../out
cp index.exe ../out

cd ../out
echo running
index.exe