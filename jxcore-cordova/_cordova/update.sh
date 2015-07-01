#!/bin/sh

if [[ ! $1 ]]
then
    echo "Give path to app, e.g. apps/colorpicker"
    exit
fi

if [ "$1" == "git" ]; then
    SRCPATH=/Users/nubisa_krzs/Documents/GitHub/jxcore-cordova/sample/www/
else
    SRCPATH=./$1/www/
fi

rm -rf ./hello1/www/jxcore
rm -rf ./hello1/platforms/android/assets/www/jxcore
rm -rf ./hello1/platforms/ios/www/jxcore

cp -rf $SRCPATH/jxcore $SRCPATH/index.html ./hello1/www/
cp -rf $SRCPATH/jxcore $SRCPATH/index.html ./hello1/platforms/android/assets/www/
cp -rf $SRCPATH/jxcore $SRCPATH/index.html ./hello1/platforms/ios/www/