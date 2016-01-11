#!/bin/bash

BIN=c:/jxcore/jxcore_64v8/Release/jx.exe

START_TIME=$SECONDS
cd jxcore-cordova
$BIN package index.js -slim tmpbuf -add "./index.js,./package.json,*.sh,LICENCE,*.md,*.png,*.bat" $1 --show-progress percent --extract
#$BIN package index.js -slim tmpbuf -add "./index.js,./package.json,*.sh,LICENCE,*.md,*.png" $1 --show-progress percent --extract1 --extract-app-root1 -native
#$BIN package index.js -slim tmpbuf -add "./index.js" $1 --show-progress percent  -native
#$BIN package index.js -slim tmpbuf $1 --show-progress percent -extract // -native -sign

rm -rf ../index

mv index.jx index index.exe ../
mv tmpbuf ../

cd ../
ls -al

rm -rf sample src
#*.md *.js

#$BIN index.jx readme
$BIN index.jx
#$BIN mt index.jx
#./index
#index.exe

ELAPSED_TIME=$(($SECONDS - $START_TIME))

echo elapsed $ELAPSED_TIME
