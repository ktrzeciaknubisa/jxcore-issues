#!/bin/sh
rm -rf hello_ios
./copySamples.sh

cordova create hello_ios com.example.hello "HelloWorld_ios"
cd hello_ios

cp -rf ~/Documents/GitHub/jxcore-cordova ./
#cp -rf ../apps/colorpicker/www/* ./www/
cp -rf ../apps/www_dev/* ./www/

cp -r ~/Documents/GitHub/jxcore/out_ios/ios/bin jxcore-cordova/io.jxcore.node/
cordova plugin add jxcore-cordova
rm -rf ./jxcore-cordova

cordova platforms add ios
cordova run ios
cd ..
