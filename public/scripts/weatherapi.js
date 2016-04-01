$( document ).ready(function() {
    $('#submitWeather').submit(function(e) {
      e.preventDefault();
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
        console.log( "Ain't no sunshine when she's gone... 😔" );
        console.log( "Error: " + errorThrown );
        console.log( "Status: " + status );
        console.dir( xhr );
      })

      .always(function( xhr, status ) {
        console.log("Sunshine my only sunshine, you make me happy when skies are grey.🌞");

      });
    });

});
