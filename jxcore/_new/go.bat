
rm -rf jxcore-addon

git clone https://github.com/jxcore/jxcore-addon
cd jxcore-addon
c:\jxcore\jxcore_64v8\Release\jx.exe install
c:\jxcore\jxcore_64v8\Release\jx.exe package test.js -add -native

test.exe