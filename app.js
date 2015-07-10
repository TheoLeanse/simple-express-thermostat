var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('THERMOSTAT');
});

var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log(host);
  console.log(port);

  console.log('Example app listening at https//%s:%s', host, port);
});
