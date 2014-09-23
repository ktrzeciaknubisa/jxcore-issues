#!/bin/bash

cd app
../jx215 package index.js test215 > /dev/null
cd ..
./jx215 monitor start
./jx215 app/test215.jx
./jx215 monitor stop




cd app
../jx233 package index.js test233  > /dev/null
cd ..
./jx233 monitor start
./jx233 app/test233.jx
./jx233 monitor stop