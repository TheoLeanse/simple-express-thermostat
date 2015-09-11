## Thermostat

Simple Express app allowing a user to adjust their temperature based on local weather, built with JS, Jasmine, Express and Grunt before being deployed to Heroku.

### To install

`$ git clone https://github.com/TheoLeanse/simple-express-thermostat/ && cd simple-express-thermostat` to clone this repo and navigate to that new, cloned directory.

`$ npm install --production` to load express from npm. You gotta have Node.js installed first, mind!

Then `$ npm start` will serve up the app (check out http://localhost:3000).

### The lovely Gruntfile!

If you want to muck about in the code, install all the dev dependencies first with `$ npm install`

Then `$ grunt`...

This will install bower dependencies (jasmine-core), run the test suite via karma, and watch for changes to source and spec files.

Test results are output to the console and launched to Google Chrome, and both are updated whenever source or spec files are saved (using Grunt's watch and browsersync).

JS-lint results will display, too!

Lovely.

### Using the API

**working with location-specific data**

This is, for my money, the nicest part of the app! (link to code?)

For any given coordinate, find the Street Address and the local temperature:

```js
myApp.location.addressData({lat: latitude, lng: longitude}, function (streetAddress) {
  // pass in a callback of your choice (perhaps updating the DOM?)
  // streetAddress is a formatted string with street name and house number (creepy, no?)
});
```

```js
myApp.location.weatherData({ lat: latitude, lng: longitude }, function (localTemperature) {
  // pass in a callback of your choice (perhaps updating the DOM?)
  // localTemperature is an integer representing degrees Celcius
});
```

**Using the Thermostat itself:**

For a new Thermostat:

```js
var thermostat = new myApp.Thermostat();
```

display the temperature:

```js
$ thermostat.temp;
20
```

It's possible to set a new default for the thermostat, too:

```js
var hotterThermostat = new myApp.Thermostat(25);
thermostat.temp;
=>25
```


Turn it up or down with

`thermostat.increase();` and `thermostat.decrease();`

Power save mode is on by default, so the thermosat is capped at 25.

To turn off power save mode:

```js
thermostat.powerSave = false;
```

To restore default temperature:

```js
thermostat.resetTemp;
```

