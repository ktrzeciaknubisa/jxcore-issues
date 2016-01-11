#!/bin/bash

jx npm uninstall -g jxc
jx install -g ktrzeciaknubisa/jxc


rm -rf hello
# create project
cordova create hello com.example.hello HelloWorld
cd hello


jxc install

