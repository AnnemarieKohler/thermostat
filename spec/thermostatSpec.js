'use strict';

describe('thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.getTemperature()).toEqual(20);
  });

  it('can increase the temperature', function() {
    thermostat.increase();
    expect(thermostat.getTemperature()).toEqual(21);
  });

  it('can decrease the temperature', function() {
    thermostat.decrease();
    expect(thermostat.getTemperature()).toEqual(19);
  });

  it('has a minimum temperature of 10 degrees', function() {
    for (var i = 0; i < 9; i++) {
      thermostat.decrease();
    }
    expect(thermostat.getTemperature()).toBeGreaterThan(9);
  });

  it('can reset temperature to default back to 20', function() {
    thermostat.increase();
    thermostat.switchPowerSavingModeOff();
    thermostat.resetTemperature();
    expect(thermostat.getTemperature()).toEqual(20);
    expect(thermostat.isPowerSavingModeOn()).toBeTruthy();
  });

  describe('It has a PSM', function() {
    it('is on by default', function() {
      expect(thermostat.isPowerSavingModeOn()).toBeTruthy();
    });

    it('has max temp of 25 when on', function() {
      for (var i = 0; i < 8; i++) {
        thermostat.increase();
      }
      expect(thermostat.getTemperature()).toEqual(25);
    });

    it('has max temp of 32 when off', function() {
      thermostat.switchPowerSavingModeOff();
      for (var i = 0; i < 15; i++) {
        thermostat.increase();
      }
      expect(thermostat.getTemperature()).toEqual(32);
    });

    it('decreases temp if PSM on after it was turned off and over 25', function() {
      thermostat.switchPowerSavingModeOff();
      for (var i = 0; i < 15; i++) {
        thermostat.increase();
      }
      thermostat.switchPowerSavingModeOn();
      expect(thermostat.getTemperature()).toEqual(25);
    })
  });



  describe('It has three power modes', function() {
    it('has green display when temp < 18 degree', function() {
      for (var i = 0; i < 3; i++) {
        thermostat.decrease();
      }
      expect(thermostat.energyUsage()).toEqual("low-usage");
    });

    it('has yellow display when temp < 25 degree', function() {
      expect(thermostat.energyUsage()).toEqual('medium-usage');
    });

    it('has red display when temp > 24 degree', function() {
      for (var i = 0; i < 5; i++) {
        thermostat.increase();
      }
      expect(thermostat.energyUsage()).toEqual('high-usage');
    });
  });
});
