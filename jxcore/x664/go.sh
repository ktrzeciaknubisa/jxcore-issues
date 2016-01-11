#!/usr/bin/env bash

jxv8 package starter.js test --native

./test index.cli.js --config=dev_config.json