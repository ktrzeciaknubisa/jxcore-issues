#!/bin/bash

cp ~/Documents/GitHub/jxcore/out_v8_64/Release/jx ./
pkill -9 jx
rm -rf *.log

DIR=$(dirname "$BASH_SOURCE")

./jx $DIR/start.js &
