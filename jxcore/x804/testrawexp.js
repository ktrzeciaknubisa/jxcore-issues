// Copyright & License details are available under JXCORE_LICENSE file


var express = require('express')
var app = express()
var getRawBody = require('raw-body')
var typer = require('media-typer')

app.use(function (req, res, next) {
  getRawBody(req, {
    length: req.headers['content-length'],
    limit: '1mb',
    encoding: typer.parse(req.headers['content-type']).parameters.charset
  }, function (err, string) {
    if (err) return next(err)
    req.text = string
    next()
  })
})