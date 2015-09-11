## Thermostat

Simple Express app allowing a user to adjust their temperature based on local weather, built with JS, Jasmine, Express and Grunt before being deployed to Heroku.

### Cloning

### Testing

`$ grunt jasmine` to run JS unit tests.

For config, see GruntFile and jasmine.json

Much more convenient than having to tab to a browser to run the SpecRunner, and I prefer installing via npm (but the grunt-contrib-jasmine package outputs a custom SpecRunner in case of booboos).

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
