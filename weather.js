//DEPENDENCIES================================================
$(document).ready(() => {
  console.log("ready!");
});

//DOM Elements
//Initial DATA

//CURRENT WEATHER=======================================================

var searchBtn = $("#current-weather");
var citiesArr = [];
//FUNCTIONS====================================================
// var searchHistory = ["Dallas", "Mexico City"];   $(document).ready(() => {

//  displayHistory();
//   $("#searchCity").on("submit", searchCity);
//   });

//    function displayHistory() {
//    $("#history").empty();
//   for (var i = 0; i < searchHistory.length; i++) {
//    var cityDiv = $("<div>");
//   cityDiv.addClass("list-group-item");
//   cityDiv.text(searchHistory[i]);
//    $("#history").append(cityDiv);
//   }
//   }
//   //user inputs search
//  function searchCity(event) {
//   event.preventDefault();
//  //API STUFF
//   var cityName = $("#cityName").val();
//   searchHistory.unshift(cityName);
//    displayHistory();
//    $("#cityName").val("");

//USER INPUT===================================================
//A user types a city
//A user submits their search
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
  //then the currrent weather of that city shows up
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
      //the color is green for favorable
      if (uvIndex < 5) {
        $("#uv-index").attr("class", "low");
        console.log("You're safe!");
      }
      //the color is purple for moderate
      if (uvIndex > 5 && uvIndex <= 10) {
        $("#uv-index").attr("class", "moderate");
        console.log("Uh oh!");
      }
      //the color is red for severe
      if (uvIndex > 10) {
        $("#uv-index").attr("class", "high");
        console.log("You will ignite on fire");
      }
      console.log("UV Index:", uvIndex);
    });
  });

  // 5 Day Forecast

  var queryURLForecast =
    "http://api.openweathermap.org/data/2.5/forecast?q=" +
    citySearch +
    "&units=imperial&appid=" +
    apiKey;
  console.log("queryURLForecast:", queryURLForecast);
  //then the currrent weather of that city shows up
  $.ajax({
    url: queryURLForecast,
    method: "GET",
  }).then(function (response) {
    console.log(response);

    // day one
    var firstDay = moment(response.list[0].dt_txt).format("dddd MMMM Do YYYY");
    $("#one").text(firstDay);
    console.log(firstDay);
    var iconCode = response.list[0].weather[0].icon;
    var weatherIcon = "http://openweathermap.org/img/w/" + iconCode + ".png";
    console.log(iconCode);
    $("#weather-icon-one").attr("src", weatherIcon);
    $("#temperature-one").text(response.list[0].main.temp);
    $("#humidity-one").text(response.list[0].main.humidity);

    // day two
    var secondDay = moment(response.list[8].dt_txt).format("dddd MMMM Do YYYY");
    $("#two").text(secondDay);
    console.log(secondDay);
    var iconCode = response.list[8].weather[0].icon;
    var weatherIcon = "http://openweathermap.org/img/w/" + iconCode + ".png";
    console.log(iconCode);
    $("#weather-icon-two").attr("src", weatherIcon);
    $("#temperature-two").text(response.list[8].main.temp);
    $("#humidity-two").text(response.list[8].main.humidity);

    // day three
    var thirdDay = moment(response.list[16].dt_txt).format("dddd MMMM Do YYYY");
    $("#three").text(thirdDay);
    console.log(thirdDay);
    var iconCode = response.list[16].weather[0].icon;
    var weatherIcon = "http://openweathermap.org/img/w/" + iconCode + ".png";
    console.log(iconCode);
    $("#weather-icon-three").attr("src", weatherIcon);
    $("#temperature-three").text(response.list[16].main.temp);
    $("#humidity-three").text(response.list[16].main.humidity);

    // day four
    var fourthDay = moment(response.list[24].dt_txt).format(
      "dddd MMMM Do YYYY"
    );
    $("#four").text(fourthDay);
    console.log(fourthDay);
    var iconCode = response.list[24].weather[0].icon;
    var weatherIcon = "http://openweathermap.org/img/w/" + iconCode + ".png";
    console.log(iconCode);
    $("#weather-icon-four").attr("src", weatherIcon);
    $("#temperature-four").text(response.list[24].main.temp);
    $("#humidity-four").text(response.list[24].main.humidity);

    // day five
    var fiveDay = moment(response.list[32].dt_txt).format("dddd MMMM Do YYYY");
    $("#five").text(fiveDay);
    console.log(fiveDay);
    var iconCode = response.list[32].weather[0].icon;
    var weatherIcon = "http://openweathermap.org/img/w/" + iconCode + ".png";
    console.log(iconCode);
    $("#weather-icon-five").attr("src", weatherIcon);
    $("#temperature-five").text(response.list[32].main.temp);
    $("#humidity-five").text(response.list[32].main.humidity);

    // // Date
    // var date = moment();
    // var dateDisplay = date.format("dddd MMMM Do YYYY");
    // $("#date").text(dateDisplay);
    // console.log("Date Display:", dateDisplay);
    // // Icon
    // var iconCode = response.weather[0].icon;
    // var weatherIcon = "http://openweathermap.org/img/w/" + iconCode + ".png";
    // console.log(iconCode);
    // $("#weather-icon").attr("src", weatherIcon);
    // // Temp
    // var temperature = response.main.temp;
    // $("#temperature").text(temperature);
    // console.log("Temperature:", temperature);
    // // Humidity
    // var humidity = response.main.humidity;
    // $("#humidity").text(humidity);
    // console.log("Humidity", humidity);
  });
});

// http://api.openweathermap.org/data/2.5/forecast?q=

//A users search history is saved

//They also see the 5 day forecast of their city that they searched
//what is the pattern do I only need to grab every other one ...
//the date,
//an icon representation of weather conditions,
//the temperature,
//and the humidity
//If the user searches for another city, then their past city search is saved
//The user can click on past city searches and view the weather

//Display Data
