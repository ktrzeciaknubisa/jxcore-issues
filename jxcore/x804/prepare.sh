#!/usr/bin/env bash

git clone https://github.com/strongloop/loopback-example-angular.git
zip -9 -r loopback.zip loopback-example-angular
scp loopback.zip root@nodejx.com:/var/www/vhosts/kriswebspace.com/httpdocs/