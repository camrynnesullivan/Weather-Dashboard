//DEPENDENCIES================================================
$(document).ready(() => {
  console.log("ready!");
});

src = "<script";
src = "https://code.jquery.com/jquery-3.5.1.min.js";
integrity = "sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=";
crossorigin = "anonymous";

//DOM Elements
//Initial DATA

var city = $("#city").val();
console.log(city);
var queryURL =
  "http://api.openweathermap.org/data/2.5/forecast?q=" +
  city +
  "&appid=14f6ccf6c898c0ddda97eb93508451eb";

//FUNCTIONS====================================================

//USER INPUT===================================================
//A user types a city
$.ajax({
  url: queryURL,
  method: "GET",
}).then(function (response) {
  console.log(response);
});
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
//the date,
//an icon representation of weather conditions,
//the temperature,
//and the humidity
//If the user searches for another city, then their past city search is saved
//The user can click on past city searches and view the weather

//Display Data
