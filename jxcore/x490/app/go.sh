#!/bin/bash

# pack
START_TIME=$SECONDS
jxv8 package test.js -add "node_modules" -native --show-progress percent -extract-what "*.node" --extract-app-root
ELAPSED_TIME=$(($SECONDS - $START_TIME))

echo "elapsed $ELAPSED_TIME seconds"


# run

mkdir -p ../out
rm -rf ../out/*

cp test ../out

cd ../out
START_TIME=$SECONDS
./test
ELAPSED_TIME=$(($SECONDS - $START_TIME))

echo "elapsed for run $ELAPSED_TIME seconds"

cd ../app
