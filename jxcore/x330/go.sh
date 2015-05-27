#!/bin/bash

mv node_modules_old node_modules
jxsm package myApp.js xxx -add node_modules -native
mv node_modules node_modules_old
./xxx
