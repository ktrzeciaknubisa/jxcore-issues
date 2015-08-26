#!/bin/bash

START_TIME=$SECONDS
jxv8 package test.js -add "node_modules" -native --show-progress none
ELAPSED_TIME=$(($SECONDS - $START_TIME))

echo "elapsed $ELAPSED_TIME seconds"

#

#./test