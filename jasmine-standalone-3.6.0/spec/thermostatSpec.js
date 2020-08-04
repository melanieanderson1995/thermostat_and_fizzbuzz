'use strict';

describe('Thermostat', function() {
  var thermostat;
  beforeEach(function() {
    thermostat = new Thermostat();
  });
  it('starts at 20 degrees', function() {
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });
  it('increases temperature with up()', function() {
    thermostat.up();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });
  it('decreases temperature with down()', function() {
    thermostat.down();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });
  it('has a minimum of 10 degrees', function() {
    for (var i = 0; i < 10; i++) {
      thermostat.down();
    }
  expect(thermostat.getCurrentTemperature()).toEqual(10);
  });
  it('has power saving mode on default', function() {
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });
  it('can turn power saving mode off', function() {
    thermostat.turnPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
  });
  it('can turn power saving mode back on', function() {
    thermostat.turnPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
    thermostat.turnPowerSavingModeOn();
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });
  it('can be reset to default temperature', function() {
    for (var i = 0; i < 5; i++) {
      thermostat.up();
    }
    thermostat.reset();
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  })
  describe('when power saving mode is on', function() {
    it('cannot increase past 25', function() {
      for (var i = 0; i < 5; i++) {
        thermostat.up();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(25)
    });
  });
  describe('when power saving mode is off', function() {
    it('cannot increase past 32', function() {
      thermostat.turnPowerSavingModeOff()
      for (var i = 0; i < 12; i++) {
        thermostat.up();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(32)
    });
  });
  describe('displays usage levels', function() {
    describe('when temperature is below 18', function() {
      it('is considered low usage', function() {
        for (var i = 0; i < 3; i++) {
          thermostat.down();
        }
        expect(thermostat.energyUsage()).toEqual('low-usage');
      });
    });
    describe('when temperature is between 18-24 inclusive', function() {
      it('is considered medium usage', function() {
        expect(thermostat.energyUsage()).toEqual('medium-usage');
      });
    });
    describe('when temperature is 25 or above', function() {
      it('is considered high usage', function() {
        thermostat.powerSavingMode = false;
        for (var i = 0; i < 5; i++) {
          thermostat.up();
        }
        expect(thermostat.energyUsage()).toEqual('high-usage')
      });
    });
  });
});
