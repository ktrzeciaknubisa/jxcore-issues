// app.js
var fs = require('fs');
var express = require('express');
var path = require('path');
var os = require('os');
var PouchDB = require('pouchdb');
var ThaliReplicationManager = require('thali/thalireplicationmanager');

console.log('starting app.js');

var app = express();
app.disable('x-powered-by');

var dbPath = path.join(os.tmpdir(), 'dbPath');

var env = process.env.NODE_ENV || 'production'; // default to production

if (process.env.MOCK_MOBILE) {
  global.Mobile = require('thali/mockmobile.js');
}

if (process.platform === 'ios' || process.platform === 'android') {
  Mobile.getDocumentsPath(function(err, location) {
    if (err) {
      console.error("Error", err);
    } else {
      dbPath = path.join(location, 'dbPath');
      console.log("Mobile Documents dbPath location: ", dbPath);
    }
  });
}

var LevelDownPouchDB = PouchDB.defaults({db: require('leveldown-mobile'), prefix: dbPath});

app.use('/db', require('express-pouchdb')(LevelDownPouchDB, { mode: 'minimumForPouchDB'}));
var db = new LevelDownPouchDB('thali');

app.use(function allowCrossDomain(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5000');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

var server = app.listen(5000, function () {
  console.log('Express server started. (port: 5000)');

  var manager = new ThaliReplicationManager(db);
  manager.start(5000, 'thali');
});