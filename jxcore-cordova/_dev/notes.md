
# Android

cordova create droid1 com.example.hello HelloWorld
cd droid1/
git clone https://github.com/obastemur/jxcore-cordova
cordova plugin add jxcore-cordova/io.jxcore.node/
cordova platforms add android
export ANDROID_HOME=~/android-sdks/
cordova build
cordova run (with phone plugged)


## Edit app

### index.html

> droid1/www/index.html

When you do build, or run, it will be copied into:
> droid1/platforms/android/assets/www/index.html


### app.js

> droid1/platforms/android/assets/jxcore/app.js