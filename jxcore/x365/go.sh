#!/bin/sh
jxsm package test.js -add _asset_file.js > /dev/null 2>&1
mv _asset_file.js _asset_file.js.old
jxsm  test.jx
mv _asset_file.js.old _asset_file.js