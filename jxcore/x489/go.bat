
@rem rm -rf jxcore-addon

@rem git clone https://github.com/jxcore/jxcore-addon
cd jxcore-addon
@rem rm -rf build
c:\jxcore\jxcore_64v8\Release\jx.exe install
@rem jx.exe install
@rem jx.exe package start.js test -add -native
c:\jxcore\jxcore_64v8\Release\jx.exe package test.js test -add -native


test.exe
@rem c:\jxcore\jxcore_64v8\Release\jx.exe test.jx
echo %ERRORLEVEL%

cd ..