#!/usr/bin/env bash

jx package app.js --extract-what "*.node" --extract-app-root --extract-verbose --extract-message "Extracting" --show-progress percent

rm -rf ../out
mkdir -p ../out
cp app.jx ../out

cd ../out

jx app.jx
