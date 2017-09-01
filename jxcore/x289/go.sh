#!/usr/bin/env bash

jxv8 package index.js -add node_modules

rm -rf ../out
mkdir -p ../out

cp index.jx ../out
cd ../out
jxv8 index.jx