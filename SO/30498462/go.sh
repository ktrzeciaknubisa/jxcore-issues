#!/bin/sh

jxsm package dir1/file1.js test

mkdir -p out
cp -r test.jx out/
cd out
jxsm test.jx
cd ..