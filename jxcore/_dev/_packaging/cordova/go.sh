#!/bin/bash

BIN=jxsm

START_TIME=$SECONDS
cd io.jxcore.node
#$BIN package index.js -slim tmpbuf -add "*.js,./package.json,*.sh,LICENSE,*.md,*.png1,*.bat" -slim "node_modules,sample" $1 --show-progress percent --extract1 --legacy1 --native1 --compress-entire
$BIN package index.js -add "./test.js"
#$BIN package index.js -slim tmpbuf -add "./index.js,./package.json,*.sh,LICENCE,*.md,*.png" $1 --show-progress percent --extract1 --extract-app-root1 -native
#$BIN package index.js -slim tmpbuf -add "./index.js" $1 --show-progress percent  -native
#$BIN package index.js -slim "tmpbuf,*.zip" $1 --show-progress percent -extract

rm -rf ../index

mv index.jx index ../
mv tmpbuf ../

cd ../
ls -al

rm -rf sample src
#*.md *.js

$BIN index.jx
#$BIN mt index.jx
#./index

ELAPSED_TIME=$(($SECONDS - $START_TIME))

echo elapsed $ELAPSED_TIME
