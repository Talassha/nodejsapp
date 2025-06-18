var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('esto se actualizo 5.0!!');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('App escuch a http://%s:%s', host, port);
});
