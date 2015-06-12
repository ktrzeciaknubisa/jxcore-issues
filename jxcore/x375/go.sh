#!/bin/sh


jxv8 package test.js testv8 -add
jxv8 package test.js testv8 -add -native

jxsm package test.js testsm -add
jxsm package test.js testsm -add -native

mv test.js test.js.old

jxsm test.js test dwa --osiem=trzy -n 6 0 --name value -abc --goho -g -h --def "1234;34"

jxv8 testv8.jx test dwa --osiem=trzy -n 6 0 --name value -abc --goho -g -h --def "1234;34"
jxv8 testsm.jx test dwa --osiem=trzy -n 6 0 --name value -abc --goho -g -h --def "1234;34"
jxsm testv8.jx test dwa --osiem=trzy -n 6 0 --name value -abc --goho -g -h --def "1234;34"
jxsm testsm.jx test dwa --osiem=trzy -n 6 0 --name value -abc --goho -g -h --def "1234;34"

./testv8 test dwa --osiem=trzy -n 6 0 --name value -abc --goho -g -h --def "1234;34"
./testsm test dwa --osiem=trzy -n 6 0 --name value -abc --goho -g -h --def "1234;34"

mv test.js.old test.js