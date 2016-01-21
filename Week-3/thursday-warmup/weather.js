// var clientIP = [];

$.get('http://jsonip.com/', function(r){
    console.log(r.ip);
    clientIP = r.ip;
    $('#ipAddress').append(clientIP);
  });

var autoCoord = {
  "async": true,
  "crossDomain": true,
  "url": "https://freegeoip.net/json/128.177.172.220",
  "method": "GET",
}

$.ajax(autoCoord).done(function (response) {
  console.log(response);
  var clientLong = response.longitude;
  var clientLat = response.latitude;
  console.log(clientLong);
  $('#longitude').append(clientLong);
  $('#latitude').append(clientLat);
});

var boulder = {
  "async": true,
  "crossDomain": true,
  "url": "http://api.openweathermap.org/data/2.5/weather?q=boulder%2Cco&appid=db88a7ef5cc14f15015ef7f19e45e035",
  "method": "GET",
}

// $.ajax(boulder).done(function (response) {
//   console.log(response);
//   var weatherType = response.weather[0].main;
//   console.log(weatherType)
//   if (weatherType === 'Clouds') {
//       $('#boulderWeather').append("cloudy!");
//     }
//   else if (weatherType === 'Clear') {
//     $('#boulderWeather').append("real fucking nice!");
//   }
//   else {
//     $('#boulderWeather').append("weather.");
//   };
// });


// console.log(url);


function weather (location) {

  var userInput = $('#input').val();
  console.log('value', userInput);
  var appID = "&appid=db88a7ef5cc14f15015ef7f19e45e035";
  var url = "http://api.openweathermap.org/data/2.5/weather?q="+userInput[0, 1]+appID;
  var inputCityState = {
    "async": true,
    "crossDomain": true,
    "url": url,
    "method": "GET",
  };

  $.ajax(inputCityState).done(function (response) {

    console.log(response);
    var weatherType = response.weather[0].main;
    console.log(weatherType);

    if (weatherType === 'Clouds') {
        $('#boulderWeather').append("cloudy!");
      }
    else if (weatherType === 'Clear') {
      $('#boulderWeather').append("real fucking nice!");
    }
    else if (weatherType === 'Fog') {
      $('#boulderWeather').append("foggy.")
    }
    else {
      $('#boulderWeather').append("weather.");
    };
  });
}

$("#submit").on('click', function (e) {
  e.preventDefault();

  weather();
});
