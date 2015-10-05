#!/usr/bin/env bash

BIN=jxv8
BIN=c:/jxcore/jxcore_64v8/Release/jx.exe

rm -rf node_modules
$BIN install leveldown
#$BIN C:/jxcore/jxcore_64v8/deps/npm/bin/npm-cli.js install leveldown

$BIN test1.js

