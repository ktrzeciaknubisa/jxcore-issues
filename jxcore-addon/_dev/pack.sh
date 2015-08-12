#!/bin/sh

BIN=jxsm
if [[ $1 != "" ]]; then BIN=$1; fi
if [[ $1 == "v8" ]]; then BIN=jxv8; fi

cd ./jxcore-addon/

$BIN -e "jxcore.utils.console.info('Packing')"

$BIN compile test.jxp

#$BIN package test.js  -extract "{ \"what\" : \"*.node\" }"
#$BIN package test.js -add jxcore-addon --extract-what "*.node,*.js,*.md" --extract-where1 "cwd"
#$BIN package test.js -add jxcore-addon -extract -extract-where "osiem"
#$BIN package test.js -add jxcore-addon -extract -extract-where "cwd"

#$BIN package test.js -add jxcore-addon -extract "{ \"what\" : \"*.node\" }" -native
#$BIN package test.js -add jxcore-addon --extract-what "*.node,*.js,*.md" --extract-where1 "cwd" -native
#$BIN package test.js -add jxcore-addon -extract -extract-where "osiem" -native
#$BIN package test.js -add jxcore-addon -extract -extract-where "cwd" -native
#$BIN package test.js -add jxcore-addon -extract -native

rm -rf ../out/*
mkdir -p ../out
mv test.jx test ../out
#mv test.jx ../out


cd ..