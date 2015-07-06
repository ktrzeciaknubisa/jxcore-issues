#!/bin/bash

cd jxcore-cordova-tests

cordova plugin remove android
cordova plugin remove jxcore-cordova

rm -rf ./jxcore-cordova
cp -rf ~/Documents/GitHub/jxcore-cordova ./

cordova plugin add jxcore-cordova
rm -Rf www

cp -r ~/Documents/GitHub/deefactorial/jxcore-cordova-tests ./www
#git clone https://github.com/deefactorial/jxcore-cordova-tests.git www
#cd www/jxcore
#npm install
cordova platform add android
cordova run