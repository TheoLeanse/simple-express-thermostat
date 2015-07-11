var express    = require('express');
var bodyParser = require('body-parser');
var session    = require('express-session');
// var sessionStore = new session.MemoryStore();
// var RedisStore = require('connect-redis')(session);

var app = express();

app.set('views', './views'); // path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
  secret: 'S3CRE7',
  resave: false,
  saveUninitialized: false,
  // store: sessionStore
  // store: new RedisStore({
  //   host: 'localhost',
  //   port: 6379,
  //   db: 2,
  //   pass: 'RedisPASS'
  // }),
}));

app.get('/', function(req, res, next) {
  console.log(req.session.temperature);
  if (req.session == undefined) {
    req.session.temperature = 20;
  }
  req.session.hi = "Hello wirral";
  res.render('index', { title: 'Thermostat' });
});

app.post('/temperature', function(req, res) {
  req.session.temperature = req.body.temperature;
    // req.session.hi = "FUCK";
    // console.log('The temp session has been set via AJAX to: ' + req.session.temperature); // does not live on past the request. not stored? need to try connect-redis to remember the session?
    // console.log(req.session.hi);
  req.session.save();
  // do I need to somehow save or finalize the session settings?
});

app.get('/temperature', function(req, res) {
  res.json({ temperature: req.session.temperature });
});

app.get('/temperature/test', function(req, res) {
  // when are the sessions being set back to their defaults?
  // how are we calling a get('/')
  console.log(req.session.temperature);
  console.log(req.session.hi);
  var testy = req.session.hi;
  var sessionsy = req.session.temperature;
  res.send(testy + sessionsy);
});

var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Thermostat app listening at https//' + host + ':' + port);
});
