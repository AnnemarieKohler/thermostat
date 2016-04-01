$( document ).ready(function() {
    $('#submitWeather').click(function() {
      var city = $("#city").val();

      $.ajax({
        url: "http://api.openweathermap.org/data/2.5/weather",
        data: {
          q: city,
          units: "metric",
          appid: "28c860d167add3874b5a9c38e0a14f23"
        },
        type: "GET",
        dataType: "json",
      })

      .done(function( json ) {
        var temp = "The temperature in " + city + " is " + json.main.temp;
        $(".weather").text(temp);
      })

      .fail(function( xhr, status, errorThrown ) {
        alert( "Ain't no sunshine when she's gone..." );
        console.log( "Error: " + errorThrown );
        console.log( "Status: " + status );
        console.dir( xhr );
      })

      .always(function( xhr, status ) {
        console.log("Sunshine my only sunshine, you make me happy when skies are grey.🌞");

      });
    });

    $('#up').click(function() {
      var temp = thermostat.temperature;

      $.ajax({
        url: "http://localhost:4567/temperature",
        data: {
          name: temp
        },
        type: "POST",
        dataType: "json",
      })

      .done(function( json ) {
        console.log("Success!");
      })

      .fail(function( xhr, status, errorThrown ) {
        alert( "Noooooo!" );
        console.log( "Error: " + errorThrown );
        console.log( "Status: " + status );
        console.dir( xhr );
      })

      .always(function( xhr, status ) {
        console.log("Sunshine my only sunshine, you make me happy when skies are grey.🌞");

      });

  });
});
