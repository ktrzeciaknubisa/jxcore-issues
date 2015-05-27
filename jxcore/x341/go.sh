#!/bin/bash

mv node_modules_old node_modules
jxsm package index.js -add node_modules
mv node_modules node_modules_old
jxsm index.jx

