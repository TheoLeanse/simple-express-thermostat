var express    = require('express'),
    bodyParser = require('body-parser'),
    session    = require('express-session');

var app = express();

app.set('views', './views'); // path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
  secret: 'S3CRE7',
  resave: false,
  saveUninitialized: false,
}));

app.get('/', function(req, res, next) {
  console.log(req.session.temperature);
  if (req.session == null) {
    req.session.temperature = 20;
  }
  req.session.hi = "Hello wirral";
  res.render('index', { title: 'Thermostat' });
});

app.post('/temperature', function(req, res) {
  req.session.temperature = req.body.temperature;
  req.session.save();
});

app.get('/temperature', function(req, res) {
  res.json({ temperature: req.session.temperature });
});

app.listen(3000, function() {
  console.log('Thermostat app listening at https//localhost:3000');
});
