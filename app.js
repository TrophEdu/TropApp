var koa = require('koa');
var app = koa();
var logger = require('koa-logger');

var session = require('koa-generic-session');
var port = process.env.PORT || 3000;
var serve = require('koa-static');

app.use(serve(__dirname + '/public'));
	
app.listen(port);
console.log('listening on port ' + port);
