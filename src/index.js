var koa = require('./koa');
var hapi = require('./hapi');
var express = require('./express');
var express = require('./restify');

module.exports.koa = koa.create();
module.exports.hapi = hapi.create();
module.exports.express = express.create();
module.exports.restify = restify.create();
