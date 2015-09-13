#!/bin/bash


cd out/ghost
rm content/data/ghost-dev.db

$1 index.js