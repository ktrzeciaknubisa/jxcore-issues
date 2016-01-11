#!/bin/bash

$1 -jxv && $1 -jsv

# e.g. pack_single.sh jxsm "jxsm_jxcore" "/Users/nubisa_krzs/Documents/GitHub/ktrzeciaknubisa/jxcore-binary-packaging"

rm -rf ./temp/
mkdir -p ./temp/
cp -r $3/* ./temp/
cp index.js ./temp/
cd ./temp/

$1 package index.js testApp -slim "*.jx,*.jxp" --show-progress percent --extract

mkdir -p ~/Documents/_packed
mv testApp.jx ~/Documents/_packed/$2_extract.jx
