#!/usr/bin/env bash

#scp npmi.sh root@nodejx.com:/var/www/vhosts/nubisacloud.com/nodejx/npmi.sh

cd ..
rm -rf npm.zip
zip -r -9 npm.zip npm

tar -zcvf npmjx310.tar.gz npm

scp npm.zip root@nodejx.com:/var/www/vhosts/nubisacloud.com/nodejx/npm.zip