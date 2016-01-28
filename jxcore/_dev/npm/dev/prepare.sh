#!/usr/bin/env bash

#scp npmi.sh root@nodejx.com:/var/www/vhosts/nubisacloud.com/nodejx/npmi.sh

VER=311
PWD=/Users/nubisa_krzs/Documents/GitHub/ktrzeciaknubisa/jxcore-issues/jxcore/_dev/npm
DIR=$PWD
#=/Users/nubisa_krzs/Documents/GitHub/ktrzeciaknubisa/jxcore-issues/jxcore/_dev/npm


cd /Users/nubisa_krzs/Documents/GitHub/ktrzeciaknubisa/npm-diff
rm -rf npm.zip npmjx$VER.tar.gz npmjx.jx

jxv8 package npm/cli.js -name npmjx --extract --extract-app-root
zip -r -9 npm.zip npm
env GZIP=-9 tar -zcvf npmjx$VER.tar.gz npm

ls -al

mv npm.zip $DIR/
mv npmjx$VER.tar.gz $DIR/
mv npmjx.jx $DIR/
mv npmjx.jxp $DIR/
cd $DIR



#scp npm.zip root@nodejx.com:/var/www/vhosts/nubisacloud.com/nodejx/npm.zip