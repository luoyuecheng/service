var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var app = express();

const routes = require('./routes');

// for parsing application/json
app.use(express.json());
// for parsing application/x-www-form-urlencode
app.use(express.urlencoded({ extended: true }));

// app.use load routes
for (let key in routes) {
  app.use(routes[key]);
}

let port = 3001;
const server = listen(port);

// listen port, start up server
function listen (port, callback) {
  let server = app.listen(port, function (...args) {
    if (callback && typeof callback === 'function') {
      return callback.call(this, port);
    }
    const address = server && server.address() || {};
    console.log('app address `%s` http://%s:%s', address.family, address.address, address.port)
  })

  // listen server, when the port is occupied, the port number is incremented
  server.on('error', function (e) {
    if (e.code === 'EADDRINUSE') {
      console.log('Error: ', e, '\nport', port);
      port += 1;
      server.close();
      server = listen(port);
    }
  })
  return server;
}