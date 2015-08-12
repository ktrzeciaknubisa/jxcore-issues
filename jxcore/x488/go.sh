#!/bin/bash


jxv8 package index.js -add dir
rm -rf copy
mkdir copy
mv *.js dir copy/

jxv8 index.jx

mv copy/* ./
