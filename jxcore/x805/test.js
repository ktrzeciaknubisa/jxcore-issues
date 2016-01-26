// Copyright & License details are available under JXCORE_LICENSE file

var fs = require('fs');



// Préparation objet
var data = {
  type: "tram",
  ligne: "T1",
  horaires: [
    [1, 2],
    [3, 4],
  ],
  dates: []
};
for (var i = 0; i < 1000000; i++) data.dates.push(i);

// Utilitaires de test
var results = {};

function doTest(title, foo, ee) {
  var d = Date.now();
  r = foo(data);
  var dur = Date.now() - d;

  fs.writeFile(title, r, function(err) {
    if (err) {
      return console.log(err);
    }
    console.log("The file was saved!");
  });


  results[title] = {
    size: r.length,
    dur: dur
  };
}

function showResults() {
  var minLen = null,
    minDur = null;
  for (var title in results) {
    if (minLen === null || minLen > results[title].size) {
      minLen = results[title].size;
    }
    if (minDur === null || minDur > results[title].dur) {
      minDur = results[title].dur;
    }
  }

  for (var title in results) {
    var html = title + ': ';
    html += results[title].size + " bytes (= " + Math.ceil((results[title].size * 100) / minLen) + "%) ";
    html += results[title].dur + " ms (= " + Math.ceil((results[title].dur * 100) / minDur) + "%) ";
    console.log(html);
  }
}

// json -> 45 to 50 ms (encoding) - output -> 6.7mb
// pson -> 200 to 210 ms (encoding) - output -> 4mb
doTest("JSONStringify", JSON.stringify);

showResults();