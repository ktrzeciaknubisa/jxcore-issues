#!/bin/bash

#cp ~/Documents/GitHub/jxcore/out_v8_64/Release/jx ./
pkill -9 jx
rm -rf *.log

jxv8 package index1.js -add -library false

jxv8 monitor start
jxv8 monitor run index1.jx
#
#./jx app.js