
@rem rm -rf jxcore-addon

@rem git clone https://github.com/jxcore/jxcore-addon
cd jxcore-addon
@rem rm -rf build
@rem c:\jxcore\jxcore_64v8\Release\jx.exe install
jx.exe install
jx.exe package start.js test -add -native


test.exe
echo %ERRORLEVEL%

cd ..