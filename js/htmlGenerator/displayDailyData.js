const displayDailyData = (response) => {
  const dailyForecastField = document.querySelector(".day-forecast-container");

  dailyForecastField.innerHTML = "";

  for (let info of response.daily) {
    const dailySelectedBlock = document.createElement("article");

    dailySelectedBlock.className = "day-forecast";

    dailySelectedBlock.innerHTML = `

          <h2>
          ${new Date(info.dt * 1000).toLocaleString("en-us", {
            weekday: "long",
          })}
          </h2>
          <img src=https://openweathermap.org/img/wn/${
            info.weather[0].icon
          }.png />
          <p>${info.weather[0].main}</p>
          <div class="day-night-container">
            <p>Day</p>
            <p>${Math.floor(info.temp.day)}&#8451</p>

            <p>${Math.floor(info.temp.night)}&#8451</p>

            <p>Night</p>
          </div>

          `;

    dailyForecastField.appendChild(dailySelectedBlock);
  }
};

export default displayDailyData;
