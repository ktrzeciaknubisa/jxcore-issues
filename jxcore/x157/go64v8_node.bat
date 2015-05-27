rm -rf build native.exe
c:\jxcore\jxcore_64v8\Release\node.exe c:\Users\nubisa_krzs\.jx\npm\node_modules\node-gyp\bin\node-gyp.js configure
c:\jxcore\jxcore_64v8\Release\node.exe c:\Users\nubisa_krzs\.jx\npm\node_modules\node-gyp\bin\node-gyp.js build
@rem jx package hello.js native -native -slim build
@rem native.exe

c:\jxcore\jxcore_64v8\Release\node.exe hello.js