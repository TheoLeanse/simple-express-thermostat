var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.set('views', './views'); // path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })); // this allows the body to be filled

app.get('/', function(req, res, next) {
  res.render('index', { title: 'Thermostat' });
});

app.post('/temperature', function(req, res) {
  console.log(req.body.temperature);
});

var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Thermostat app listening at https//' + host + ':' + port);
});
