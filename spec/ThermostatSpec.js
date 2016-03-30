describe('Thermostat', function () {
  var thermostat;
  
  it('starts at 20 degrees', function() {
    thermostat = new Thermostat()
    expect(thermostat.temperature).toEqual(20);
  });
  
});