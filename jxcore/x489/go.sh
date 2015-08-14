#!/bin/sh

#rm -rf jxcore-addon

#git clone https://github.com/jxcore/jxcore-addon
cd jxcore-addon
#jxv8 install
jxv8 package test.js -add -native

./test

cd ..