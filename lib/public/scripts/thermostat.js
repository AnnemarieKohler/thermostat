'use strict';

function Thermostat() {
  this.powerSavingMode = true;
  this.DEFAULT_TEMPERATURE = 20
  this.MAX_POWER_SAVE_MODE = 25;
  this.MAX_POWER_SAVE_MODE_OFF = 32;
  this.MINIMUM_TEMPERATURE = 10;
  this.LOW_ENERGY_USAGE_LIMIT = 18;
  this.HIGH_ENERGY_USAGE_LIMIT = this.MAX_POWER_SAVE_MODE;

  this.temperature = this.DEFAULT_TEMPERATURE;
}

Thermostat.prototype.getTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.increase = function() {
  if (this.isMaximum()) {
    return;
  }
  this.temperature += 1;
  };

Thermostat.prototype.decrease = function() {
  if (this.isMinimum()) {
    return;
  }
  this.temperature -= 1;
};

Thermostat.prototype.isMinimum = function() {
  return this.temperature === this.MINIMUM_TEMPERATURE;
};

Thermostat.prototype.switchPowerSavingModeOn = function() {
  if(this.temperature > this.MAX_POWER_SAVE_MODE) {
    this.temperature = this.MAX_POWER_SAVE_MODE;
  }
  this.powerSavingMode = true;
};

Thermostat.prototype.switchPowerSavingModeOff = function() {
  this.powerSavingMode = false;
};

Thermostat.prototype.isPowerSavingModeOn = function() {
  return this.powerSavingMode === true;
};

Thermostat.prototype.isMaximum = function() {
  if (this.isPowerSavingModeOn() === false) {
    return this.temperature === this.MAX_POWER_SAVE_MODE_OFF;
  }
  return this.temperature === this.MAX_POWER_SAVE_MODE;
};

Thermostat.prototype.resetTemperature = function() {
  this.temperature = this.DEFAULT_TEMPERATURE;
  this.switchPowerSavingModeOn();
};

Thermostat.prototype.energyUsage = function() {
  if (this.temperature < this.LOW_ENERGY_USAGE_LIMIT) {
    return 'low-usage';
  } else if (this.temperature >= this.HIGH_ENERGY_USAGE_LIMIT) {
    return 'high-usage';
  }
  return 'medium-usage';
};
