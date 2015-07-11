var updateDisplay = function() {
  console.log('hi');
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
