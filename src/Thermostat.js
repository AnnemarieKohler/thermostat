'use strict';

function Thermostat() {
  this.MINIMUM_TEMPERATURE = 10;
  this.MAXIMUM_TEMPERATURE_POWER_SAVING_ON = 25;
  this.MAXIMUM_TEMPERATURE_POWER_SAVING_OFF = 35;
  this.temperature = 20;
  this.powerSavingMode = true;
}

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.increaseTemperature = function() {
  if(this.isMaximumTemperature()) {
    return;
  }
  this.temperature += 1;
};

Thermostat.prototype.decreaseTemperature = function() {
  if(this.isMinimumTemperature()) {
    return;
  }
  this.temperature -= 1;
};

Thermostat.prototype.isMinimumTemperature = function() {
  return this.temperature === this.MINIMUM_TEMPERATURE;
};

Thermostat.prototype.isMaximumTemperature = function() {
  if(this.powerSavingMode) {
    return this.temperature === this.MAXIMUM_TEMPERATURE_POWER_SAVING_ON;
  } 
  return this.temperature === this.MAXIMUM_TEMPERATURE_POWER_SAVING_OFF;
};

Thermostat.prototype.isPowerSavingModeOn = function() {
  return this.powerSavingMode === true;
};

Thermostat.prototype.switchPowerSavingModeOff = function() {
  return this.powerSavingMode = false;
};

Thermostat.prototype.switchPowerSavingModeOn = function() {
  return this.powerSavingMode = true;
};
