#!/usr/bin/env bash

cp -r /Users/nubisa_krzs/Documents/GitHub/jxcore/out_v8_64/Release/jx ./

./jx -e "require('nan')"
./jx -e "console.log('ok')"
./jx -p "process.versions"