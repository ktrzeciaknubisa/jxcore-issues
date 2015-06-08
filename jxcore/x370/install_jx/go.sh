#!/bin/sh
jxv8 package test.js -add -native -preinstall "curl https://jxcore.s3.amazonaws.com/0301/jx_osx64v8.zip -o file.zip,unzip -o -j file.zip"
rm -rf out
mkdir -p out
cp test out/
cd out
./test
ls -al
cd ..
