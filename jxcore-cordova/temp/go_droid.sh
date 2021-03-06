#!/bin/bash

rm -rf hello1

cordova create hello1 com.example.hello HelloWorld
cd hello1

#cordova create shoppingList com.example.hello ShoppingList
#cd shoppingList


#git clone https://github.com/obastemur/jxcore-cordova
cp -rf ~/Documents/GitHub/jxcore-cordova ./

cp -rf ../apps/include_jx/www/* ./www/
#cp -rf ../apps/colorpicker/www/* ./www/
#cp -rf ../apps/express_sendfile/www/* ./www/
#cp -rf ../apps/isReady/www/* ./www/
#cp -rf ../apps/www_dev/* ./www/
#cp -rf ../apps/www_411/* ./www/
#cp -rf ../apps/www_org/* ./www/


#cordova plugin add https://github.com/jxcore/jxcore-cordova.git

#rm -rf jxcore-cordova/io.jxcore.node/bin
#rm -f jxcore-cordova/io.jxcore.node/src/android/jxcore-binaries/*
#cp -f /Users/nubisa_krzs/Documents/GitHub/jxcore/_android_sm/android/bin/* jxcore-cordova/src/android/jxcore-binaries/

#cd jxcore-cordova/src/android/jni
#~/android-ndk-r10d/ndk-build
#cd ../../../../

#cordova plugin add jxcore-cordova/io.jxcore.node/  # old
cordova plugin add jxcore-cordova
rm -rf ./jxcore-cordova
cordova platforms add android
#cordova platforms add ios

cordova plugins add org.apache.cordova.console


#export ANDROID_HOME=~/android-sdks/
#
#cp -rf ../hello1/jxcore/* /Users/nubisa_krzs/Documents/temp/cordova/hello1/platforms/android/assets/jxcore/
#cp -rf ../hello1/www/* /Users/nubisa_krzs/Documents/temp/cordova/hello1/www/
#
#
cordova build
cordova prepare android