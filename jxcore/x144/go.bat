jx package test.js -add -native

copy /y test.exe test2.exe

resource_hacker\ResourceHacker.exe -addoverwrite "test.exe", "test.exe", "icon.ico", ICONGROUP, MAINICON, 0

@rem InsertIcons\bin\Release\InsertIcons.exe test2.exe "icon.ico" --replace
InsertIcons.exe test2.exe "icon.ico" --replace