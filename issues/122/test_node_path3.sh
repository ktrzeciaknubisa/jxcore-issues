#!/bin/sh

PWD=`pwd`
DIR=$PWD/node_path3

rm -rf $DIR
mkdir -p $DIR/codedir1/mycode/lib/

echo "console.log(require('myutil').value);" > $DIR/codedir1/mycode/lib/lint.js

mkdir -p $DIR/codedir2/myutil/lib/
echo "module.exports = require('./lib/myutil');" > $DIR/codedir2/myutil/index.js
echo "exports.value = 'OK';" > $DIR/codedir2/myutil/lib/myutil.js

cd $DIR

echo "\n\n\n############################ 1. Test unpackaged:"
export NODE_PATH=$DIR/codedir2
jx $DIR/codedir1/mycode/lib/lint.js

jx package $DIR/codedir1/mycode/lib/lint.js test > /dev/null

mkdir -p $DIR/out
mv test.jx out/

cd out

echo "\n\n\n############################ 2. Test PACKAGED, with NODE_PATH poiting to existing FILE:"
export NODE_PATH=$DIR/codedir2/myutil/lib
jx test.jx

echo "\n\n\n############################ 3. Test PACKAGED, with NODE_PATH poiting to existing DIR:"
export NODE_PATH=$DIR/codedir2
jx test.jx

echo "\n\n\n############################ 4. Test PACKAGED, without NODE_PATH:"
export NODE_PATH=
jx test.jx

echo "\n\n\n############################ 5. Test PACKAGED, with NODE_PATH poiting to non-existing DIR (it exists only inside jx package):"
export NODE_PATH=$DIR/out/codedir2
jx test.jx

export NODE_PATH=

cd ../
