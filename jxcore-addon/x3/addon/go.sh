#!/bin/sh

BIN=jxsm
if [[ $1 != "" ]]; then BIN=$1; fi
if [[ $1 == "v8" ]]; then BIN=jxv8; fi
#rm -rf ./jxcore-addon/
if [[ ! -d jxcore-addon ]]; then
    git clone https://github.com/jxcore/jxcore-addon
fi

cd ./jxcore-addon/
#rm -rf ~/.jx ~/.node-gyp build
rm -rf build
$BIN -e "jxcore.utils.console.info('installing: $BIN install')"
$BIN install

$BIN -e "jxcore.utils.console.info('executing')"
$BIN test.js


cd ..
