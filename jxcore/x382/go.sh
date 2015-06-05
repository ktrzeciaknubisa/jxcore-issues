#!/bin/sh
jxv8 package test.js -add request -native
rm -rf out
mkdir -p out
cp test out/
cd out
./test
ls -al
cd ..
