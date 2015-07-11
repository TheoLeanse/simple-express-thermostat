var express    = require('express');
var bodyParser = require('body-parser');
var session    = require('express-session');

var app = express();

app.set('views', './views'); // path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({ secret: 'S3CRE7', resave: false, saveUninitialized: false }));

app.get('/', function(req, res, next) {
  if (req.session.temperature === null) {
    req.session.temperature = 20;
  }
  req.session.hi = "Hello wirral";
  res.render('index', { title: 'Thermostat' });
});

app.post('/temperature', function(req, res) {
  req.session.temperature = req.body.temperature;
  console.log(req.session.temperature); // does not live on past the request. not stored? need to try connect-redis to remember the session?
});

app.get('/temperature', function(req, res) {
  res.json({ temperature: req.session.temperature });
});

app.get('/testing-sessions', function(req, res) {
  var testy = req.session.hi;
  var sessionsy = req.session.temperature;
  res.send(testy + sessionsy);
});

var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Thermostat app listening at https//' + host + ':' + port);
});
