#!/bin/bash

mv copy/* ./

jxv8 package index.js -add


rm -rf copy
mkdir copy
mv *.js* copy/

jxv8 index.jx
#./index

#mv copy/* ./

#mv index.js index.old
#mv fff.js fff.old
#jxv8 index.jx
#mv index.old index.js
#mv fff.old fff.js