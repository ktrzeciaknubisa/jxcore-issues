cls

c:\jxcore\jxcore_64v8\Release\jx.exe package index.js -add

rm -rf copy
mkdir copy
mv *.js copy/

c:\jxcore\jxcore_64v8\Release\jx.exe index.jx

ls -al

mv copy/* ./

