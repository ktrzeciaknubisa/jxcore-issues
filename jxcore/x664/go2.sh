#!/usr/bin/env bash

jxv8 package starter.js test --native -slim $(`cat  ./.jxignore`)

#./test index.cli.js --config=dev_config.json