#!/bin/bash

jxsm package test.js -add "b,src1.*,subfolder1,lib,assets" -slim "src1.*,a"
jxsm package test.js -add "assets" -slim "src,*.txt,assets/assets1,ping.*"