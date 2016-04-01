$( document ).ready(function() {

  $.ajax({
    url: "http://api.openweathermap.org/data/2.5/weather",
    data: {
      q: "Barcelona,Spain",
      units: "metric",
      appid: "28c860d167add3874b5a9c38e0a14f23"
    },
    type: "GET",
    dataType: "json",
  })

  .done(function( json ) {
    var temp = "The temperature in Barcelona is " + json.main.temp;
    $(".weather").text(temp);
  });

});
