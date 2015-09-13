#!/bin/bash

pkill -9 jxapp
pkill -9 jx
jxv8 parent.js &

sleep 1
ps aux | grep jxapp

sleep 3
ps aux | grep jxapp
