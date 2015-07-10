var express = require('express');
var app = express();

app.set('views', './views'); // path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res, next) {
  res.render('index', { title: 'Thermostat' });
});

var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log(host);
  console.log(port);

  console.log('Thermostat app listening at https//' + host + ':' + port);
});
