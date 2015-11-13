#!/bin/bash

rm -rf hello1 hello

~/cordova/install_.js $1

cordova create hello com.example.hello HelloWorld
cd hello

cordova platforms add android ios
#cordova platforms add ios

#jxc install ~/Documents/GitHub/jxcore-cordova-release/0.0.8/io.jxcore.node.jx
cp -r /Users/nubisa_krzs/Documents/GitHub/jxcore-cordova-release/tmp/io.jxcore.node ./
jxc sample ./io.jxcore.node/test
cordova plugins add io.jxcore.node

#jxc sample /Users/nubisa_krzs/Documents/GitHub/jxcore-cordova/test
#jxc sample express_sample


#cordova run android --device
cordova run ios --device
#cordova run ios --emulator