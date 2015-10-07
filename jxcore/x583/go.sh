#!/usr/bin/env bash

BIN=c:/jxcore/jxcore_32v8/Release/jx.exe
#BIN=c:/jxcore/jxcore_64v8/Release/jx.exe

$BIN package index.js test -add -native

test.exe

#"C:/Program Files (x86)/Windows Kits/8.1/bin/x64/signtool.exe" sign /debug /a test.exe

#test.exe


#c:/jxcore/jxcore_64v8/Release/jx.exe package index.js test -add -native -sign -signx1