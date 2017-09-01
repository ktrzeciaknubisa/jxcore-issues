#!/usr/bin/env bash


rm -rf ./node-ssdp

git clone https://github.com/diversario/node-ssdp.git
cd node-ssdp
git checkout v2.6.5
jx npm install
echo executing
jx index.js
echo $?