#!/usr/bin/env bash


rm -rf tmp
mkdir -p tmp

cp hello/io.jxcore.node.jx tmp/
cd tmp

c:/jxcore/jxcore_64v8/Release/jx.exe io.jxcore.node.jx