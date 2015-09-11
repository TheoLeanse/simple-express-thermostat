## Thermostat

Simple Express app allowing a user to adjust their temperature based on local weather, built with JS, Jasmine, Express and Grunt before being deployed to Heroku.

### Cloning

`$ git clone https://github.com/TheoLeanse/simple-express-thermostat/` to clone this repo.

`$ npm install` to load in dependencies via npm.

`$ npm start` will serve the app on http://localhost:3000.

### Testing

Run `$ grunt` from the CLI.

This will install bower dependencies (jasmine-core), run the test suite via karma, and watch for changes to source and spec files.

Test results are output to the console and to the browser via live reload (browsersync).

JSlint results, too!


### Using the API

**myApp.Thermostat**

To use the Thermostat:

```js
var thermostat = new myApp.Thermostat();
```

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
