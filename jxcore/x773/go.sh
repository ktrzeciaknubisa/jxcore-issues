#!/usr/bin/env bash

#BIN=c:/jxcore/jxcore_64v8/Release/jx.exe

#$BIN package test.js -add node_modules --native --extract-what "*.node" --extract-app-root

cp -r test.exe ../out
cd ../out
test.exe
