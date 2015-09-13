#!/bin/bash

rm -rf somefolder test.installed x.x

jxsm package test.js --preinstall "mkdir 'somefolder', JXBINARY -jxv"
#jxsm package test.js -add "assets" -slim "src,*.txt,assets/assets1,ping.*"

#jxsm compile test.jxp

jxsm test.jx
#./test
ls -al