#!/usr/bin/env bash

#jxsm package index.js --plugin "jx plugtest1.js" -extract --extract-verbose1
jxsm package index.js -slim folder --plugin "/Users/nubisa_krzs/Documents/GitHub/ktrzeciaknubisa/jxcore-issues/jxcore/x679/node_modules/.bin/babel %FILE" -extract --extract-verbose1

rm -rf ../out
mkdir ../out

cp index.jx ../out

cd ../out
echo executing
jxsm index.jx

cat ./index/folder/test1.js



