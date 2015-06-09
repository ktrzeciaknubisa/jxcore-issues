cls
echo console.log('hey! from asset');require('./test.js'); > hey.js
c:\jxcore\jxcore_64v8\Release\jx.exe package test.js -add hey.js -native
del /f hey.js
@rem echo console.log('hey! from file'); > hey.js
test.exe
