#!/bin/sh

curl http://jxcore.com/xil.sh | bash -s v8 local
mv ./jx ./jxv8

curl http://jxcore.com/xil.sh | bash -s sm local
mv ./jx ./jxsm