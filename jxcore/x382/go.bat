c:\jxcore\jxcore_64v8\Release\jx.exe package test.js -add node_modules -native > nul
rm -rf out
mkdir out
cp test.exe out/
cd out
test.exe
ls -al
cd ..
