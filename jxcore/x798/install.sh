#!/usr/bin/env bash

rm -rf node_modules
#jxv8 install sqlite3
jxv8 install sqlite3 --build-from-source
#--sqlite_libname=sqlcipher -sqlite=`brew --prefix`

mv node_modules/sqlite3 node_modules/sqlite3enc
#mv node_modules/sqlite3enc node_modules/sqlite3

#jxv8 index.js