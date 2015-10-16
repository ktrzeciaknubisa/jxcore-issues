// Copyright & License details are available under JXCORE_LICENSE file

var PouchDB = require('pouchdb');

var db = new PouchDB('dbname');

db.put({
  _id: 'dave@gmail.com',
  name: 'David',
  age: 68
});

db.changes().on('change', function() {
  console.log('Ch-Ch-Changes');
});

//db.replicate.to('http://example.com/mydb');

