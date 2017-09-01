#!/usr/bin/env bash

BIN=jxv8
#BIN=jx237
#BIN=jx307v8
#BIN=jx304v8
#BIN=jx310v8


#$BIN package index.js -add dir --extract --extract-app-root --fs_reach_sources:true
#$BIN package index.js -add "dir,test.js" --extract-chmod --extract-verbose
#$BIN compile index.jxp
$BIN package index.js -add "dir,test.js"
#--extract --extract-verbose --extract-app-root --extract-chmod    --extract-what1 "*.js"

ls -al dir

rm -rf ../out
mkdir -p ../out
mv index.jx ../out
cd ../out

$BIN index.jx

echo !!!!!!!!!! `pwd`
ls -al
#stat -c "%a %n" *

if [ -d index/dir ]
then
echo !!!!!!!!!! `pwd`/index
ls -al index

echo !!!!!!!!!! `pwd`/index/dir
ls -al index/dir
#stat -c "%a %n" index/dir/*
fi

if [ -d dir ]
then
echo !!!!!!!!!! `pwd`/dir
ls -al dir
#stat -c "%a %n" dir/*
fi