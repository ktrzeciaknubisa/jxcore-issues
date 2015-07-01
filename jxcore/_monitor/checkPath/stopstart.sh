#!/bin/bash

cp ~/Documents/GitHub/jxcore/out_v8_64/Release/jx ./
pkill -9 jx
rm -rf *.log
./jx monitor start
#./jx monitor stop
#./jx app.js