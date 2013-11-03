var express = require('express');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
//app.use(function (req, res, next) {
//  // see above
//  //res.setHeader('Strict-Transport-Security', 'max-age=8640000; includeSubDomains');
//
//  if (req.headers['x-forwarded-proto'] !== 'https') {
//    return res.redirect(301, 'https://' + req.headers.host + '/');
//  }
//
//  next();
//})
app.use(app.router);
app.use(express.static(path.join(__dirname, 'dist')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

http.createServer(app).listen(8090, function(){
  console.log('Express server listening on port ' + app.get('port'));
});
