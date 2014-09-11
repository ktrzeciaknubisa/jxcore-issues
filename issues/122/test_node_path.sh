#!/bin/sh

PWD=`pwd`
DIR=$PWD/node_path

rm -rf $DIR
mkdir -p $DIR/lib

echo "console.log(require('express'));" > $DIR/index.js

cd $DIR/lib
jx install express > /dev/null
cd ..

echo "\n\n\n############################ 1. Test unpackaged:"
export NODE_PATH=lib/node_modules
jx index.js


jx package index.js test > /dev/null

mkdir -p $DIR/out
mv test.jx out/

cd out

echo "\n\n\n############################ without NODE_PATH:"
jx test.jx

echo "\n\n\n############################ with NODE_PATH:"
export NODE_PATH=lib/node_modules
jx test.jx

export NODE_PATH=

cd ../
