#!/bin/bash
# tests jx monitor run testXXX.jx

function run() {

echo "############ text for jx $1"

cd app
rm *.jx *.jxp > /dev/null
../jx$1 package index2.js test$1 > /dev/null
cd ..
./jx$1 monitor start
./jx$1 monitor run app/test$1.jx
curl http://localhost:17777/json
./jx$1 monitor stop

}

run 215
run 233
run 235
