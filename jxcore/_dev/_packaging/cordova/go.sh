#!/bin/bash

START_TIME=$SECONDS
cd jxcore-cordova
#jxsm package index.js -slim tmpbuf -add "./index.js,./package.json,*.sh,LICENCE,*.md,*.png" $1 --show-progress percent --extract
#jxsm package index.js -slim tmpbuf -add "./index.js,./package.json,*.sh,LICENCE,*.md,*.png" $1 --show-progress percent --extract1 --extract-app-root1 -native
#jxsm package index.js -slim tmpbuf -add "./index.js" $1 --show-progress percent  -native
jxsm package index.js -slim tmpbuf $1 --show-progress percent -extract1

rm -rf ../index

mv index.jx index ../
mv tmpbuf ../

cd ../
ls -al

rm -rf sample src
#*.md *.js

#jxsm index.jx readme
jxsm index.jx
#jxsm mt index.jx
#./index

ELAPSED_TIME=$(($SECONDS - $START_TIME))

echo elapsed $ELAPSED_TIME
