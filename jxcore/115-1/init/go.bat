rmdir /s /q node_modules
del TestApp.*
call jx package app.js "TestApp" -slim node_modules -native