#!/usr/bin/env bash

BIN=~/Github/jxcore/out_v8_64/Release/jx

cd ~/bsd10

$BIN compile ./npmjx.jxp

rm -rf ../out
mkdir ../out
cp -r npmjxv310.jx ../out
cd ../out

$BIN npmjxv310.jx
