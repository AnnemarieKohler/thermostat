$( document ).ready(function() {
  thermostat = new Thermostat();


  updateTemperature();

  function updateTemperature() {
    $( '#display' ).html(thermostat.getTemperature());
    $( '#display' ).attr('class', thermostat.energyUsage());
    $( '#display' ).addClass( "display" );
  }

  $( '#up' ).on('click', function() {
    thermostat.increase();
    updateTemperature();
  });

  $( '#down' ).on('click', function() {
    thermostat.decrease();
    updateTemperature();
  });

  $( '#PSMon' ).on('click', function() {
    thermostat.switchPowerSavingModeOn();
    updateTemperature();
    $( '#confirmation' ).html('PSM is on');
  });

  $( '#PSMoff' ).on('click', function() {
    thermostat.switchPowerSavingModeOff();
    $( '#confirmation' ).html('PSM is off');
  });

  $( '#reset' ).on('click', function() {
    thermostat.resetTemperature();
    updateTemperature();
    $( '#confirmation' ).html('PSM is on');
  });

});
