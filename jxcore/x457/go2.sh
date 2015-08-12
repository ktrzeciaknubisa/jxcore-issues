#!/bin/bash

#mv copy/* ./

jxv8 package test2.js -add child.js -native
./test2 one two three

#rm -rf copy
#mkdir copy
#mv *.js* copy/
#
#jxv8 index.jx
