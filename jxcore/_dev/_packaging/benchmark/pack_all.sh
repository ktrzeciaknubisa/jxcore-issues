#!/bin/bash



./pack_single.sh jxsm "jxsm_jxcore" "/Users/nubisa_krzs/Documents/GitHub/ktrzeciaknubisa/jxcore-binary-packaging"
./pack_single.sh jxsm "jxsm_cordova" "/Users/nubisa_krzs/Documents/GitHub/jxcore-cordova-release/tmp/io.jxcore.node"
./pack_single.sh jxsm "jxsm_ghost" "/Users/nubisa_krzs/Documents/GitHub/ktrzeciaknubisa/jxcore-issues/jxcore/_dev/_packaging/benchmark/node_modules/ghost"


./pack_single.sh $PWD/jx "jxsm_old_jxcore" "/Users/nubisa_krzs/Documents/GitHub/ktrzeciaknubisa/jxcore-binary-packaging"
./pack_single.sh $PWD/jx "jxsm_old_cordova" "/Users/nubisa_krzs/Documents/GitHub/jxcore-cordova-release/tmp/io.jxcore.node"
./pack_single.sh $PWD/jx "jxsm_old_ghost" "/Users/nubisa_krzs/Documents/GitHub/ktrzeciaknubisa/jxcore-issues/jxcore/_dev/_packaging/benchmark/node_modules/ghost"


./pack_single.sh jx "jxv8_old_jxcore" "/Users/nubisa_krzs/Documents/GitHub/ktrzeciaknubisa/jxcore-binary-packaging"
./pack_single.sh jx "jxv8_old_cordova" "/Users/nubisa_krzs/Documents/GitHub/jxcore-cordova-release/tmp/io.jxcore.node"
./pack_single.sh jx "jxv8_old_ghost" "/Users/nubisa_krzs/Documents/GitHub/ktrzeciaknubisa/jxcore-issues/jxcore/_dev/_packaging/benchmark/node_modules/ghost"


./pack_single.sh jxv8 "jxv8_jxcore" "/Users/nubisa_krzs/Documents/GitHub/ktrzeciaknubisa/jxcore-binary-packaging"
./pack_single.sh jxv8 "jxv8_cordova" "/Users/nubisa_krzs/Documents/GitHub/jxcore-cordova-release/tmp/io.jxcore.node"
./pack_single.sh jxv8 "jxv8_ghost" "/Users/nubisa_krzs/Documents/GitHub/ktrzeciaknubisa/jxcore-issues/jxcore/_dev/_packaging/benchmark/node_modules/ghost"