#!/usr/bin/env bash

BIN=jx307sm
BIN=jx307v8

#git clone https://github.com/diversario/node-ssdp.git
cd node-ssdp
rm -rf node_modules
$BIN npm install
$BIN index.js

echo 'ok'