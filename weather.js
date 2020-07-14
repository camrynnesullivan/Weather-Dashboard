//DEPENDENCIES================================================
$(document).ready(() => {
  console.log("ready!");
});

//DOM Elements
//Initial DATA

//CURRENT WEATHER=======================================================

var searchBtn = $("#current-weather");

// //the temperature,
// var temperature= response.main.temp;
// //the humidity,
// var humidity=
//  //the wind speed,
//  var windSpeed=
//  //and the UV index
//  var uvIndex=

//FUNCTIONS====================================================

//USER INPUT===================================================
//A user types a city
searchBtn.on("click", function (event) {
  event.preventDefault();
  //City Search
  var citySearch = $("#city-search").val();
  console.log("City Search:", citySearch);
  var apiKey = "14f6ccf6c898c0ddda97eb93508451eb";
  var queryURLCurrent =
    " http://api.openweathermap.org/data/2.5/weather?q=" +
    citySearch +
    "&units=imperial&appid=" +
    apiKey;
  console.log("queryURL:", queryURLCurrent);
  $.ajax({
    url: queryURLCurrent,
    method: "GET",
  }).then(function (response) {
    console.log(response);
    // City Name
    var cityName = response.name;
    $("#city-name").text(cityName);
    console.log("cityName:", cityName);
    // Date
    var date = moment();
    var dateDisplay = date.format("dddd MMMM Do YYYY");
    $("#date").text(dateDisplay);
    console.log("Date Display:", dateDisplay);
    // Icon
    var iconCode = response.weather[0].icon;
    var weatherIcon = "http://openweathermap.org/img/w/" + iconCode + ".png";
    console.log(iconCode);
    $("#weather-icon").attr("src", weatherIcon);
    // Temp
    var temperature = response.main.temp;
    $("#temperature").text(temperature);
    console.log("Temperature:", temperature);
    // Humidity
    var humidity = response.main.humidity;
    $("#humidity").text(humidity);
    console.log("Humidity", humidity);
    // Wind Speed
    var windSpeed = response.wind.speed;
    $("#wind-speed").text(windSpeed);
    console.log("Wind Speed:", windSpeed);
    // UV Index
    var latitude = response.coord.lat;
    var longitude = response.coord.lon;
    var uvURL =
      "http://api.openweathermap.org/data/2.5/uvi?appid=" +
      apiKey +
      "&lat=" +
      latitude +
      "&lon=" +
      longitude;

    console.log("uvURL:", uvURL);

    $.ajax({
      url: uvURL,
      method: "GET",
    }).then(function (response) {
      console.log("UV", response);
      var uvIndex = response.value;
      $("#uv-index").text(uvIndex);
      if (uvIndex < 2) {
        $(".index").attr("class", "low");
        console.log("You're safe!");
      }
      if (uvIndex >= 2 && uvIndex <= 5) {
        $(".index").attr("class", "moderate");
        console.log("Getting risky");
      }
      if (uvIndex > 5 && uvIndex <= 7) {
        $(".index").attr("class", "high");
        console.log("Uh oh!");
      }
      if (uvIndex > 7 && uvIndex <= 10) {
        $(".index").attr("class", "very-high");
        console.log("You better stay inside!");
      }
      if (uvIndex > 10) {
        $(".index").attr("class", "extreme");
        console.log("You will ignite on fire");
      }
      console.log("UV Index:", uvIndex);
    });
  });
});

// http://api.openweathermap.org/data/2.5/forecast?q=
//A user submits their search

//A users search history is saved
//then the currrent weather of that city shows up
//they see the city name,
//the date,
//an icon representation of weather conditions,
//the temperature,
//the humidity,
//the wind speed,
//and the UV index
//based on the UV Index
//the color is green for favorable
//the color is purple for moderate
//the color is red for severe
//They also see the 5 day forecast of their city that they searched
//what is the pattern do I only need to grab every other one ...
//the date,
//an icon representation of weather conditions,
//the temperature,
//and the humidity
//If the user searches for another city, then their past city search is saved
//The user can click on past city searches and view the weather

//Display Data

// // This is our API key. Add your own API key between the ""
// var APIKey = "31334c8d01a6dfc9251af9ec44a97ac5";
// // Here we are building the URL we need to query the database
// var queryURL =
//   "http://api.openweathermap.org/data/2.5/weather?q=Bujumbura,Burundi&appid=" +
//   APIKey +
//   "&units=imperial";
// // We then created an AJAX call
// $.ajax({
//   url: queryURL,
//   method: "GET",
// }).then(function (response) {
//   console.log(response);
//   console.log(response.main.temp);
//   // Create CODE HERE to Log the queryURL
//   // Create CODE HERE to log the resulting object
//   // Create CODE HERE to calculate the temperature (converted from Kelvin)
//   // Create CODE HERE to transfer content to HTML
//   $(".temp").text(response.main.temp);
//   // Hint: To convert from Kelvin to Fahrenheit: F = (K - 273.15) * 1.80 + 32
//   // Create CODE HERE to dump the temperature content into HTML
