
rm -rf test.txt
C:\jxcore\jxcore_32v8\Release\jx.exe package index.js test -native

#perl exeType.perl test.exe WINDOWS
python exeType.py test.exe


test.exe

echo $?

ls -al
#rm -rf test.txt