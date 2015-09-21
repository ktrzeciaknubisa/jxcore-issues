#!/bin/bash

rm -rf ghost content

cd node_modules/ghost
#$1 package index.js "ghost" --extract-what "*.node,./content" --extract-overwrite --extract-verbose --extract-app-root
#$1 package index.js "ghost" --extract --extract-overwrite
#$1 package index.js "ghost" --extract --extract-overwrite --extract-app-root -native
$1 package index.js "ghost" --extract-what "*.node,./content" --extract-overwrite --extract-verbose --extract-app-root --native
#mv ghost.jx ../../
mv ghost ../../

