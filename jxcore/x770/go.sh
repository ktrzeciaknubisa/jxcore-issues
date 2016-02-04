#!/usr/bin/env bash

BIN=jxv8
#BIN=jx237
#BIN=jx307v8
#BIN=jx304v8
#BIN=jx310v8
BIN=c:/jxcore/jxcore_64v8/Release/jx.exe

#$BIN package index.js -add dir --extract --extract-app-root --fs_reach_sources:true
$BIN package index.js -add "dir,test.js" --extract --extract-verbose --extract-app-root --extract-chmod no

ls -al dir

rm -rf ../out
mkdir -p ../out
cp index.jx ../out
cd ../out

$BIN index.jx

echo !!!!!!!!!! out
ls -al

if [ -d index/dir ]
then
echo !!!!!!!!!! index/dir `pwd`
ls -al index/dir
fi

if [ -d dir ]
then
echo !!!!!!!!!! dir `pwd`
ls -al dir
fi