$( document ).ready(function() {
  thermostat = new Thermostat();
  var temp;

  $.getJSON('/temp', function(data){
    temp = data.temp;
    thermostat.temperature = temp;
    console.log("Show me temp");
    console.log(temp);
    updateTemperature();
  });


  function updateTemperature() {
    console.log("Show me actual");
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
