#!/bin/bash

cd jxcore-tutorial-ghost-packaged

$1 package index.js "ghost" -extract --extract-overwrite --show-progress percent

cd ..

./run.sh $1

