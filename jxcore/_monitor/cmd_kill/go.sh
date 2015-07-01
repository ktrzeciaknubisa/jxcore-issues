#!/bin/bash

#cp ~/Documents/GitHub/jxcore/out_v8_64/Release/jx ./
pkill -9 jx
rm -rf *.log
jxv8 monitor start
#
jxv8 monitor run index1.js
#
#sleep 1
#jxv8 monitor kill index1.js