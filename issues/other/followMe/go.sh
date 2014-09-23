#!/bin/bash


function run() {

echo "############ text for jx $1"

cd app
rm *.jx *.jxp > /dev/null
../jx$1 package index.js test$1 > /dev/null
cd ..
./jx$1 monitor start
./jx$1 app/test$1.jx
./jx$1 monitor stop

}

run 215
run 233
run 235
