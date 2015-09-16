#!/bin/bash

jxv8 package index.js "test" --show-progress percent

rm -rf ./../out/*
cp test.jx ../out/
cd ../out
jxv8 test.jx

