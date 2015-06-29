#!/bin/sh

jxv8 package test.js -add -native
./test --one=1 --two 2 --three -abc -d 1 str1 str2 str3

