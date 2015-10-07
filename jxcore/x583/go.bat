cls

cp  c:/jxcore/jxcore_64v8/Release/jx.exe ./jxx.exe
@rem delcert jxx.exe
@rem signtool sign /a jxx.exe
jxx.exe package index.js test -add -native -sign -signx 1 -nover

test.exe

@rem delcert test.exe
@rem "C:/Program Files (x86)/Windows Kits/8.1/bin/x64/signtool.exe" sign /a test.exe

@rem test.exe

