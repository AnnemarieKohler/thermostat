$( document ).ready(function() {
  $('.button').click(function() {
    var temp = thermostat.temperature;

    $.ajax({
      url: "http://localhost:4567/temperature",
      data: { name: temp },
      type: "POST",
      dataType: "json",
    })

    .done(function( json ) {
      console.log("Success POST!");
    })

    .fail(function( xhr, status, errorThrown ) {
      console.log( "Error: " + errorThrown );
      console.log( "Status: " + status );
      console.dir( xhr );
    });

      $.ajax({
        url: "http://localhost:4567/temp",
        data: { name: temp },
        type: "GET",
        dataType: "json",
      })

      .done(function( json ) {
        console.log("Success GET!");
      })

      .fail(function( xhr, status, errorThrown ) {
        console.log( "Error: " + errorThrown );
        console.log( "Status: " + status );
        console.dir( xhr );
      });

    });
});
