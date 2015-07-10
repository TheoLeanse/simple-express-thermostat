var latitude;
var longitude;
var apiCall;

navigator.geolocation.getCurrentPosition(getLocation);

function getLocation(location) {
  latitude = (location.coords.latitude);
  longitude = (location.coords.longitude);
  getAddress(latitude, longitude);
  getWeather(latitude, longitude);
}

function getAddress(latitude, longitude) {
  var geocoder = new google.maps.Geocoder();
  geocoder.geocode({'latLng': new google.maps.LatLng(latitude, longitude) }, function(results, status) {
    $('span#location').html(results[0].formatted_address);
  });
}

function weatherAPI(latitude, longitude) {
  return 'http://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude;
}

function getWeather(latitude, longitude) {
  apiCall = weatherAPI(latitude, longitude);
  $.getJSON(apiCall, function(data) {
    getTemp  = data.main.temp;
    var temp = Math.round(getTemp - 272.15);
    $('span#locationTemp').html(temp);

    // other weather facts?
    // representative piccies / graphics?
    // control the default temp for our thermostat?
  });
}
