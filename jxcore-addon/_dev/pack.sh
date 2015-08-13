#!/bin/sh

BIN=jxsm
if [[ $1 != "" ]]; then BIN=$1; fi
if [[ $1 == "v8" ]]; then BIN=jxv8; fi

cd ./jxcore-addon/

$BIN -e "jxcore.utils.console.info('Packing', 'clear')"

#$BIN compile test.jxp

#$BIN package test.js  -extract "{ \"what\" : \"*.node\" }" --extract-where:cwd
#$BIN package test.js -extract-what "*.node"
#$BIN package test.js -add jxcore-addon --extract-what "*.node,*.js,*.md" --extract-where1 "dir"
#$BIN package test.js -add jxcore-addon -extract -extract-where "osiem"
#$BIN package test.js -add jxcore-addon -extract -extract-where "./"
#$BIN package test.js -add jxcore-addon -extract

#$BIN package test.js -add "*.node" -extract "{ \"what\" : \"*.node\" }" -native
#$BIN package test.js -add jxcore-addon --extract-what "*.node,*.js,*.md" --extract-where1 "dir" -native
#$BIN package test.js -add jxcore-addon -extract -extract-where "osiem" -native
#$BIN package test.js -add jxcore-addon -extract -extract-where:./ -native
#$BIN package test.js -add jxcore-addon -extract-where:./ -native
#$BIN package test.js -add jxcore-addon -extract-what "*.node" -native
#$BIN package test.js -add jxcore-addon -extract -native
$BIN package test.js -add jxcore-addon -native

rm -rf ../out/*
mkdir -p ../out
mv test.jx test.exe test ../out
#mv test.jx ../out

mkdir -p ../out/build/Release && cp ./build/Release/binding.node ../out/build/Release/binding.node

cd ..