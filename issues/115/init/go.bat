rmdir /s /q node_modules
del issue115.*
call jx install
call jx package socks.js issue115 -native -slim node_modules
call issue115.exe