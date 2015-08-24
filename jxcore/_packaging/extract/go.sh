#!/bin/bash

rm -rf somefolder test.installed x.x

#jxsm package test.js --extract-what "*.txt" --extract-pre-actions "mkdir -p testfolder, JX_BINARY -jxv" --extract-app-root --extract-verbose
jxsm package test.js --extract-pre-actions "mkdir -p testfolder, JX_BINARY -jxv" --extract-verbose
#jxsm package test.js -add "assets" -slim "src,*.txt,assets/assets1,ping.*"

#jxsm compile test.jxp

jxsm test.jx
#./test
ls -al