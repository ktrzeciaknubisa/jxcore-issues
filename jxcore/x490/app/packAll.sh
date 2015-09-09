#!/bin/bash

#rm test_*
#
#./jxv8 package test.js -add "node_modules" -native --show-progress percent
#mv test test_prev_v8
#
#./jxsm package test.js -add "node_modules" -native --show-progress percent
#mv test test_prev_sm

jxv8 package test.js -add "node_modules" -native --show-progress percent
mv test test_v8

jxsm package test.js -add "node_modules" -native --show-progress percent
mv test test_sm