#!/usr/bin/env bash

# uses previous ~/.jx npm, but removes other links

rm -rf ~/.jx/npm
cp -r ./backup/npm ~/.jx/

#sudo mv /usr/local/bin/jx /usr/local/bin/jx_npm
sudo rm -rf /usr/local/bin/node
sudo rm -rf /usr/local/bin/npm
sudo rm -rf /usr/local/bin/node-gyp

sudo rm -rf /usr/local/lib/node_modules/npm
sudo rm -rf /usr/local/lib/node_modules/node-gyp