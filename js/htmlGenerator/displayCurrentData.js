const displayCurrentData = (response) => {
  const currentForecastField = document.querySelector(
    ".current-forecast-container"
  );

  currentForecastField.innerHTML = `
    <label for="city-field">${response.name}, ${response.sys.country}</label>
    <div class="current-forecast">
        <h1 class="current-temperature">${Math.floor(
          response.main.temp
        )}&#8451</h1>
    <div>
        <span>${response.weather[0].main}</span>
        <span>${Math.floor(response.main.temp_max)}&#8451</span>
    </div>

  <img src=https://openweathermap.org/img/wn/${response.weather[0].icon}.png />

<div class="location-container">
  <p class="current-condition">${response.weather[0].main}</p>
  <p class="current-location">${response.name}, ${response.sys.country}</p>
</div>
</div>
`;
};

export default displayCurrentData;
