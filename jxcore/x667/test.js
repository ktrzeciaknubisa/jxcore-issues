// Copyright & License details are available under JXCORE_LICENSE file

var path = require('path');

var download_through_proxy = function(url, target, cb) {
  var url_module = require('url');
  var parsed_url = url_module.parse(url);

  var proxy_url = parsed_url.protocol.toLowerCase() === 'https:' ?
    jxcore.utils.argv.getValue('https-proxy') :
    jxcore.utils.argv.getValue('proxy');

  if (!proxy_url)
    return false;

  var parsed_proxy_url = url_module.parse(proxy_url);

  var http = require('http');
  var https = require('https');

  // tunnel options
  var opts = {
    host: parsed_proxy_url.hostname,
    port: parsed_proxy_url.port,
    method: 'CONNECT',
    path: parsed_url.hostname,
    headers: {
      Host: parsed_url.hostname
    }
  };

  if (parsed_proxy_url.auth)
    opts.headers['Proxy-Authorization'] = 'Basic ' +
    new Buffer(parsed_proxy_url.auth).toString('base64');

  http.request(opts).on('connect', function(res, socket, head) {
    https.get({
      host: parsed_url.hostname,
      path: parsed_url.path,
      socket: socket,
      agent: false
    }, function(res) {
      var file = fs.createWriteStream(target);
      res.on('data', function(chunk) {
        file.write(chunk);
      }).on('end', function() {
        file.end();
      });
      file.on('finish', function() {
        file.close();
        setTimeout(cb, 1000);
      });
    });
  }).on('error', function(e) {
    console.error(e);
    process.exit(1);
  }).end();

  return true;
};

var npm_basename = 'npmjxv1_9.jx';
var npm_str = 'https://s3.amazonaws.com/nodejx/' + npm_basename;


download_through_proxy(npm_str, path.join(__dirname, npm_basename), function() {
  console.log('ok');
});