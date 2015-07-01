#!/bin/bash

rm -rf ./apps/www
rm -rf ./apps/www_org
cp -rf ~/Documents/GitHub/jxcore-cordova/sample/www ./apps/www_org

rm -rf ./apps/express_sample
rm -rf ./apps/express_sample_org
cp -rf ~/Documents/GitHub/jxcore-cordova/sample/express\ sample/ ./apps/express_sample_org