#!/bin/bash

BIN=jxv8

$BIN package index.js xpm -add node_modules -slim "./node_modules/semver,doc,html,man,test"  -native

sudo cp xpm /usr/local/bin/