var express = require('express');
var app = express();

app.get('/user', function (req, res) {
  res.send('Hello World');
});

app.get('*.js', function (req, res) {
  console.log(req.path)
  res.sendFile( __dirname + req.path );
});

app.get('/**', function (req, res) {
  console.log(req.path, req.query)
  // res.sendFile( __dirname + req.path + '.html' );
  // res.sendFile(__dirname + req.path);
  res.sendFile(__dirname + '/index.html');
});

app.post('/**', function (req, res) {
  console.log(req.path, req.query);
  res.send(req.body);
})

var server = app.listen('5000', function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('应用实例，http://%s:%s', host, port);
})
