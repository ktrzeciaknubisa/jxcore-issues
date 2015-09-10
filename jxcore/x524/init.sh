#!/bin/bash



rm -rf jxcore-tutorial-ghost-packaged

git clone https://github.com/karaxuna/jxcore-tutorial-ghost-packaged
cd jxcore-tutorial-ghost-packaged

$1 install

cd ..

./pack.sh $1