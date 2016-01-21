#!/usr/bin/env bash

rm -rf ~/.jx/npm
cp -r ./backup/npm ~/.jx/

if [ ! -f "/usr/local/bin/node" ]
then
  sudo cp /usr/local/bin/node2 /usr/local/bin/node
fi


if [ ! -d "/usr/local/lib/node_modules/npm" ]
then
  sudo cp -r ./backup_usr/npm /usr/local/lib/node_modules/
fi

if [ ! -d "/usr/local/lib/node_modules/node-gyp" ]
then
  sudo cp -r ./backup_usr/node-gyp /usr/local/lib/node_modules/
fi

if [ ! -f "/usr/local/bin/npm" ]
then
  sudo ln -s /usr/local/lib/node_modules/npm/bin/npm-cli.js /usr/local/bin/npm
fi

if [ ! -f "/usr/local/bin/node-gyp" ]
then
  sudo ln -s /usr/local/lib/node_modules/node-gyp/bin/node-gyp.js /usr/local/bin/node-gyp
fi