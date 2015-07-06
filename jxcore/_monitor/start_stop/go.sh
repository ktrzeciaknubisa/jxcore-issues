#!/bin/bash

clean () {
    cp ~/Documents/GitHub/jxcore/out_v8_64/Release/jx ./
    pkill -9 jx
    rm -rf *.log
    ./jx monitor start
}

#stopping after app exit
clean
./jx app.js
./jx monitor stop

#stopping after few secs
clean
./jx app.js &
sleep 5
./jx monitor stop


# stooping as fast as possible
clean
./jx app.js &
./jx monitor stop
