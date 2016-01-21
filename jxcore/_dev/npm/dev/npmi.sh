#!/usr/bin/env bash

mkdir -p ~/.jx
rm -rf ~/.jx/npm
cd ~/.jx

curl http://jxcore.com/npm.zip -o npm.zip
unzip -o npm.zip

echo "Done"
