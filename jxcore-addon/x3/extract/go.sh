#!/bin/sh

#curl https://s3.amazonaws.com/nodejx/npmjx300.tar.gz -o npm.tar.gz
cp /Users/nubisa_krzs/Documents/GitHub/jxcore/deps/npmjx300.tar.gz ./npm.tar.gz

rm -rf ./node_modules
cp -rf /Users/nubisa_krzs/Documents/GitHub/jxcore/tools/npmjx/node_modules ./


BIN=jxsm
if [[ $1 != "" ]]; then BIN=$1; fi
if [[ $1 == "v8" ]]; then BIN=jxv8; fi

BINSM=jx302sm
BINV8=jx302v8

BINSM=./jxsm
BINV8=./jxv8

#$BIN -e "jxcore.utils.console.info('executing against $BIN')";
#$BIN ./extract.js jxsm

rm -rf npm
#jxsm install tar.gz

$BINSM package extract.js -add ./node_modules
mv ./extract.jx ./extractsm.jx
mv ./extract.jxp ./extractsm.jxp

$BINV8 package extract.js -add ./node_modules
mv ./extract.jx ./extractv8.jx
mv ./extract.jxp ./extractv8.jxp

rm -rf ./node_modules
mv ./extract.js ./extract.js_old

rm -rf npmsm
$BINSM -e "jxcore.utils.console.info('executing against $BINSM')";
$BINSM ./extractsm.jx
mv npm npmsm

rm -rf npmv8
$BINV8 -e "jxcore.utils.console.info('executing against $BINV8')";
$BINV8 ./extractsm.jx
mv npm npmv8

diff -rq npmsm npmv8

mv ./extract.js_old ./extract.js