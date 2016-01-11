// Copyright & License details are available under JXCORE_LICENSE file

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(':memory:');

db.serialize(function () {

  db.run("CREATE TABLE tabla (str TEXT)");
  db.run("insert into tabla(str) values('ちは')", function (err) {
    db.get("select str from tabla", function (err, row) {
      console.log(row.str);
    })
  })
});