function Thermostat() {
  this.temp      = 20;
  this.powerSave = true;
  this.colour    = 'yellow';

  Thermostat.prototype.increase = function() {
    if (this.powerSave && this.temp < 25) {
      this.temp += 1;
    }
    if (!this.powerSave && this.temp < 32) {
      this.temp += 1;
    }
    this.setColour();
  };

  Thermostat.prototype.decrease = function() {
    if (this.temp > 10) {
      this.temp -= 1;
    }
    this.setColour();
  };

  Thermostat.prototype.resetTemp = function() {
    this.temp = 20;
    this.setColour();
  };

  Thermostat.prototype.setColour = function() {
    if (this.temp < 18) {
      this.colour = 'green';
    }
    else if (this.temp < 25) {
      this.colour = 'yellow';
    }
    else {
      this.colour = 'red';
    }
  };

}
