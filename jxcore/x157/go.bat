rm -rf build native.exe
call jx c:\Users\nubisa_krzs\.jx\npm\node_modules\node-gyp\bin\node-gyp.js configure
call jx c:\Users\nubisa_krzs\.jx\npm\node_modules\node-gyp\bin\node-gyp.js build
@rem jx package hello.js native -native -slim build
@rem native.exe

call jx hello.js