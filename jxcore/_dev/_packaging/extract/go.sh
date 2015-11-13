#!/bin/bash

rm -rf somefolder test.installed x.x

BIN=C:\\Users\\azureuser\\Github\\jxcore_64v8\\Release\\jx.exe
BIN=C:\\jxcore\\jxcore_64v8\\Release\\jx.exe

BIN=jxv8
#BIN=jx64v8305

#jxsm package test.js --extract-what "*.txt" --extract-pre-actions "mkdir -p testfolder, JX_BINARY -jxv" --extract-app-root --extract-verbose
#jx package test.js --extract-pre-actions "mkdir -p testfolder, JX_BINARY -jxv" --extract-verbose
#$BIN package test.js --extract-what "./src" --extract-verbose --show-progress percent --extract-app-root
jxsm package test.js -add "assets" -slim "src,*.txt,assets/assets1,ping.*" --extract

#jxsm compile test.jxp

rm -rf ../../out/*
cp test.jx ../../out/

cd ../../out/
$BIN test.jx

#./test
ls -al