#!/bin/bash


mkdir -p out
rm -rf out/*
cp jxcore-tutorial-ghost-packaged/ghost.jx out/

cd out

$1 ghost.jx