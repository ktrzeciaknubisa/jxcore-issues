#!/usr/bin/env bash

BIN=jxsm
#BIN=jx304sm


$BIN package index.js -add test.js

rm -rf ../out
mkdir -p ../out
cp index.jx ../out
cd ../out

for (( c=1; c<=10; c++ )) do
  echo run $c
#  $BIN mt index.jx
  $BIN index.jx
#  $BIN mt main.js
done

