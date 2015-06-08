#!/bin/sh

jxv8 package test.js -add ./lib -native -extract > /dev/null 2>&1
mkdir -p out
#mv lib lib_old
#mv test ttt
cp test out/ttt
cd out
./ttt
cd ..
#mv lib_old lib