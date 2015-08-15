#!/bin/sh

BIN=jxsm
if [[ $1 != "" ]]; then BIN=$1; fi
if [[ $1 == "v8" ]]; then BIN=jxv8; fi

cd ./jxcore-addon/

$BIN -e "jxcore.utils.console.info('Packing', 'clear')"

#$BIN compile test.jxp

# extract enabled
#$BIN package test.js -extract true
#$BIN package test.js -extract
#$BIN package test.js -extract something

# extract disabled = error s
#$BIN package test.js
#$BIN package test.js -extract 0
#$BIN package test.js -extract 0 --extract-what "*.txt"


# working
#$BIN package test.js --extract-what "*.node,*.js,*.md" --extract-where "./"
#$BIN package test.js --extract-what "*.node,*.js,*.md" --extract-app-root
#$BIN package test.js -extract -extract-where "osiem"
#$BIN package test.js -extract -extract-where "./"

#err expected : Partial extract ...
#$BIN package test.js -extract-what "*.node,*.json" --extract-where:cwd
#$BIN package test.js -extract-what "*.node"



####### native

# extract enabled = error: Native packages `--extract` option is supported only with `--extract-where=./` added.
#$BIN package test.js -extract true -native
#$BIN package test.js -extract -native
#$BIN package test.js -extract -extract-where "osiem" -native

# extract disabled = error
#$BIN package test.js -native
#$BIN package test.js -extract 0 -native


# working
#$BIN package test.js --extract-what "*.node,*.js,*.md" --extract-where "./" -native
#$BIN package test.js -extract -extract-where "./" -native

#err expected : Partial extract ...
#$BIN package test.js -extract-what "*.node,*.json" --extract-where:cwd -native
#$BIN package test.js -extract-what "*.node" -native



#$BIN package test.js -native

rm -rf ../out
#rm -rf ../out/.*
mkdir -p ../out
mv test.jx test.exe test ../out
#mv test.jx ../out

#mkdir -p ../out/build/Release && cp ./build/Release/binding.node ../out/build/Release/binding.node

cd ../out
if [[ -a ./test.jx ]]; then
    $BIN ./test.jx
fi
if [[ -a ./test ]]; then
    ./test
fi

cd ..