#!/bin/bash


$1 package test.js -add "file.txt"


mv file.txt file.txt2
$1 test.jx

mv file.txt2 file.txt
