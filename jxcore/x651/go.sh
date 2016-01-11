#!/usr/bin/env bash

#BIN=C:\\jxcore\\jxcore_64v8\\Release\\jx.exe

BIN=jx

$BIN package app.js --extract-what "*.node" --extract-app-root --extract-verbose --extract-message "Extracting" --show-progress percent

#rm -rf ../out
#mkdir -p ../out
#cp app.jx ../out
#
#cd ../out

$BIN app.jx
