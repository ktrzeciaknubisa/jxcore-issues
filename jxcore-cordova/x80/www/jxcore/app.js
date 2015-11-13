var fs = require('fs');

if (typeof Mobile !== 'undefined') {
  Mobile('log').call("JXcore is up and running!");

  Mobile('getBuffer').registerSync(function() {
    console.log("getBuffer is called!!!");
    var buffer = new Buffer(25000);
    buffer.fill(45);

    // send back a buffer
    return buffer;
  });

  Mobile('asyncPing').registerAsync(function(message, callback){
    setTimeout(function() {
      callback("Pong:" + message);
    }, 500);
  });
}


if (typeof clog === 'undefined')
  clog = console.log;

var express = require('express');
var router = express.Router();

// middleware specific to this router
router.use(function timeLog(req, res, next) {
  clog('Time: ', Date.now());
  next();
});
// define the home page route
router.get('/', function(req, res) {
  res.send('Birds home page');
});
// define the about route
router.get('/about', function(req, res) {
  res.send('About birds');
});

router.get('/test', function(req, res) {
  res.render('index.html');
});

var app = express();
app.use(router);
app.set('views', __dirname + "/views/")

app.listen(3000, function () {
  clog('Ready');
})