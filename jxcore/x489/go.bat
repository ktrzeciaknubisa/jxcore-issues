
@rem rm -rf jxcore-addon

@rem git clone https://github.com/jxcore/jxcore-addon
cd jxcore-addon
@rem rm -rf build
c:\jxcore\jxcore_64v8\Release\jx.exe install
@rem jx.exe install
@rem jx.exe package start.js test -add -native
c:\jxcore\jxcore_64v8\Release\jx.exe package test.js test -add -native


test.exe

c:\jxcore\jxcore_64v8\Release\jx.ex C:\jxcore\jxcore_64v8\samples\jx_packaging\dren.js test.exe test2.exe

test2.exe

@rem c:\jxcore\jxcore_64v8\Release\jx.exe test.jx
echo %ERRORLEVEL%

cd ..