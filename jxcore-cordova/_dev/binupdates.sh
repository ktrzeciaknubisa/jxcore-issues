#!/usr/bin/env bash

HERE="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

cd $HERE/hello

cordova plugin remove io.jxcore.node

rm -rf io.jxcore.node
cp -r ~/Documents/GitHub/jxcore-cordova-release/tmp/io.jxcore.node ./
#cp -r ~/Documents/GitHub/ktrzeciaknubisa/jxcore-cordova/* ./io.jxcore.node/

# ios
rm -rf ./io.jxcore.node/bin
cp -r ~/Documents/GitHub/jxcore/out_ios/ios/bin ./io.jxcore.node/
#cp -r ~/Documents/GitHub/jxcore/out_ios/ios/bin ./plugins/io.jxcore.node/
echo ios done

# android
cd ./io.jxcore.node/src/android
cp /Users/nubisa_krzs/Documents/GitHub/jxcore-cordova/src/android/*.sh ./

echo $PATH
export PATH=$PATH:/Users/nubisa_krzs/android-ndk-r10d/
./build_leveldown.sh /Users/nubisa_krzs/Documents/GitHub/jxcore/_android_sm/android/bin


cd $HERE/hello
cordova plugin add io.jxcore.node

cordova prepare