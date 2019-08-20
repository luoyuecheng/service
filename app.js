var express = require('express');
var app = express();

const routes = require('./routes');

// app.use load routes
for (let key in routes) {
  app.use(routes[key]);
}

// listence port
var port = 3001;

function listen (port, callback) {
  return app.listen(port, function (...args) {
    if (callback && typeof callback === 'function') {
      return callback.call(this, port);
    }
    const address = server && server.address() || {};
    console.log('app address `%s` http://%s:%s', address.family, address.address, address.port)
  })
}
var server = listen(port);
server.on('error', function (e) {
  if (e.code === 'EADDRINUSE') {
    console.log('Error: ', e, '\nport', port);
    port += 1;
    server.close();
    server = listen(port);
  }
})