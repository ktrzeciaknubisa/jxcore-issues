#!/bin/bash

rm -rf jxcore-cordova-tests

cordova create jxcore-cordova-tests org.jxcore.jxcorecordova.jxcorecordovatests jxcore-cordova-tests
cd jxcore-cordova-tests
cordova plugin add https://github.com/apache/cordova-plugin-whitelist.git --save