## Thermostat

Simple Express app allowing a user to adjust their temperature based on local weather, built with JS, Jasmine, Express and Grunt before being deployed to Heroku.

### To install

`$ git clone https://github.com/TheoLeanse/simple-express-thermostat/ && cd simple-express-thermostat` to clone this repo and navigate to that new, cloned directory.

`$ npm install` to load express from npm. You gotta have Node.js installed first, please!

Then `$ npm start` will serve up the app (check out http://localhost:3000).

### The lovely Gruntfile!

Run `$ grunt` from the CLI.

This will install bower dependencies (jasmine-core), run the test suite via karma, and watch for changes to source and spec files.

Test results are output to the console and launched to Google Chrome, and both are updated whenever source or spec files are saved (using Grunt's watch and browsersync).

JS-lint results will display, too!

Lovely.

### Using the API

1) displaying Location-specific data

For my money the nicest part of the app! (link to code?)

**myApp.location.addressData**

To use:
```js
myApp.location.addressData(lat, lng);
```

**myApp.location.weatherData(lat, lng)**

To use:
```js
location.weatherData({ lat: latitude, lng: longitude }, function (data) {
  //callback  
});
```




2) the Thermostat

**myApp.Thermostat**

For a new Thermostat:

```js
var thermostat = new myApp.Thermostat();
```

display the temperature:

```js
$ thermostat.temp;
20
```

Turn it up or down:

```js
thermostat.increase();
thermostat.decrease();
```

Power save mode is on by default, so the thermosat is capped at 25.

To turn off power save mode:

```js
thermostat.powerSave = false;
```

To restore default temperature:

```js
thermostat.resetTemp;
```
var hotterThermostat = new myApp.Thermostat(25);
thermostat.temp;
=>25
```
