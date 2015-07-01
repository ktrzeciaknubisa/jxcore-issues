#!/bin/bash

cp ~/Documents/GitHub/jxcore/out_v8_64/Release/jx ./
./jx monitor stop
rm -rf *.log
./jx monitor start

./jx app.js