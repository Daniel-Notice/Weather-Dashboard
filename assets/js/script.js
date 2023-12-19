//Getting the current day
let now = dayjs().format("DD/MM/YYYY");
console.log(now);

//selecting all of the elements
const searchEL = document.querySelector(".weather-search");
const searchELval = document.querySelector(".weather-search").value;
const searchBtn = document.querySelector("#search-button");
const todaySection = document.querySelector("#today");
const tempmain = document.querySelector(".temp-main");
const windmain = document.querySelector(".wind-main");
const humidity = document.querySelector(".humidity-main");
const h2location = document.querySelector(".location");




//My api Key
const APIKey = "d0b12f7162c21d128c6108524d623396";
let queryURL = `https://api.openweathermap.org/data/2.5/forecast?units=metric&q=london&appid=${APIKey}`;

let searchHistory = [];

fetch(queryURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);

    h2location.textContent = data.city.name + " " + "(" + now + ")";
    tempmain.textContent = "Temp: " + data.list[0].main.temp + " °C";
    windmain.textContent = "Wind: " + data.list[0].wind.speed + " KPH";
    humidity.textContent = "Humidity: " + data.list[0].main.humidity + " %";
  });

//   ${searchEL}

searchBtn.addEventListener("submit", function () {});
