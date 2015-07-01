#!/bin/sh
rm -rf hello
cordova create hello com.example.hello "HelloWorld"
cd hello
cordova platform add ios
cordova build
cordova run ios
cd ..