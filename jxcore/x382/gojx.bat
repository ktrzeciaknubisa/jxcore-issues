cls
c:\jxcore\jxcore_64v8\Release\jx.exe package test.js -add node_modules > nul
rm -rf out
mkdir out
cp test.jx out/
cd out
c:\jxcore\jxcore_64v8\Release\jx.exe test.jx
cd ..
