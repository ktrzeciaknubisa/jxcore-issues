#!/bin/bash

cp ~/Documents/GitHub/jxcore/out_v8_64/Release/jx ./
pkill -9 jx
rm -rf *.log
./jx start.js console
#./jx app.js