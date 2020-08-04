'use strict';

class Thermostat {
  constructor() {;
    this.DEFAULT_TEMPERATURE = 20;
    this.MINIMUM_TEMPERATURE = 10;
    this.temperature = this.DEFAULT_TEMPERATURE;
    this.powerSavingMode = true;
    this.MAX_LIMIT_PSM_ON = 25;
    this.MAX_LIMIT_PSM_OFF = 32;
    this.MEDIUM_ENERGY_USAGE_LIMIT = 18;
    this.HIGH_ENERGY_USAGE_LIMIT = 25;
  }
  getCurrentTemperature() {
    return this.temperature;
  }
  up() {
    if (this.isMaximumTemperature()) {
      return;
    }
    this.temperature += 1
  }
  down() {
    if (this.isMinimumTemperature()) {
      return;
    }
    this.temperature -= 1
  }
  isMinimumTemperature() {
    return this.temperature === this.MINIMUM_TEMPERATURE;
  }
  isMaximumTemperature() {
    if (this.isPowerSavingModeOn() === false) {
      return this.temperature === this.MAX_LIMIT_PSM_OFF;
    }
    return this.temperature === this.MAX_LIMIT_PSM_ON;
  }
  isPowerSavingModeOn() {
    return this.powerSavingMode === true;
  }
  turnPowerSavingModeOff() {
    return this.powerSavingMode = false;
  }
  turnPowerSavingModeOn() {
    return this.powerSavingMode = true;
  }
  reset() {
    return this.temperature = this.DEFAULT_TEMPERATURE;
  }
  energyUsage() {
    if (this.temperature < this.MEDIUM_ENERGY_USAGE_LIMIT) {
      return "low-usage";
    }
    else if (this.temperature < this.HIGH_ENERGY_USAGE_LIMIT && this.temperature >= this.MEDIUM_ENERGY_USAGE_LIMIT) {
      return "medium-usage";
    }
    return "high-usage"
  }
}
