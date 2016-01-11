#!/usr/bin/env bash

BIN=jxv8
BIN=jx307v8


$BIN package index2.js -add file.xml

rm -rf ../out ../out2
mkdir -p ../out
cp index2.jx ../out
cd ../out

#for (( c=1; c<=10; c++ )) do
#  echo run $c
##  $BIN mt index.jx
#  $BIN index.jx
##  $BIN mt main.js
#done



#$BIN ../out/index.jx
$BIN index2.jx