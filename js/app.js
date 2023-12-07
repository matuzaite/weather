import getCurrentWeather from "./fetchApi/getCurrentWeather.js";
import getDailyWeather from "./fetchApi/getDailyWeather.js";
import getCurrentSelectedWeather from "./fetchApi/getCurrentSelectedWeather.js";
import getDailySelectedWeather from "./fetchApi/getDailySelectedWeather.js";
import displayDailyData from "./htmlGenerator/displayDailyData.js";
import displayCurrentData from "./htmlGenerator/displayCurrentData.js";

const cityField = document.querySelector("#city-field");

let latitude;
let longitude;

cityField.addEventListener("keypress", async (e) => {
  if (e.key === "Enter") {
    const data = await getCurrentSelectedWeather(e.target.value);
    const dailyData = await getDailySelectedWeather(e.target.value);
    displayCurrentData(data);
    displayDailyData(dailyData);
  }
});

window.onload = function () {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async (position) => {
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;

      const currentWeather = await getCurrentWeather(latitude, longitude);
      const dailyWeather = await getDailyWeather(latitude, longitude);

      displayCurrentData(currentWeather);
      displayDailyData(dailyWeather);
    });
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
};
