rmdir /s /q node_modules
del issue128.*
call jx install express
call jx package demo.js issue128 -native
call issue128.exe