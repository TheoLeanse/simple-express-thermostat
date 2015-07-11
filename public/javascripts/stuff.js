var updateDisplay = function() {
  $('#temperature').html(thermostat.temp);
  $('#temperature').css('color', thermostat.colour);
};

function postToTemp(temperature) {
  $.post('temperature', temperature);
}

thermostat = new Thermostat();

updateDisplay(); // replace with setTemp();
// setTemp();

function setTemp() {
  $.getJSON('/temperature', function(data) {
    console.log(data);
    thermostat.temp = data.temperature;
    updateDisplay();
  });
}

// if you can add multiple event listeners at the same time, add up-arrow?

$('#up').click(function() {
  thermostat.increase();
  updateDisplay();
  postToTemp({ temperature: thermostat.temp });
});

$('#down').click(function() {
  thermostat.decrease();
  updateDisplay();
  postToTemp({ temperature: thermostat.temp });
});

$('#reset').click(function() {
  thermostat.resetTemp();
  updateDisplay();
  postToTemp({ temperature: thermostat.temp });
});

$('#powersaver').click(function() {
  thermostat.powerSave = !thermostat.powerSave;
});

// touchscreen clickwheel for mobile?

// function openweatherAPICall(latitude, longitude) {
//   return 'http://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude;
// }
//
// var apiCall = openweatherAPICall(latitude, longitude);


// return formatted address for lat/longitude - reverse geocoding with Google Maps API
// adjust thermostat accordingly
