const API_KEY = `b7fe81d6f5a2a80d0863fbc325ce583f`;

async function getDailySelectedWeather(cityName) {
  try {
    const locationRes = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${API_KEY}`
    );
    const locationData = await locationRes.json();
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${locationData[0].lat}&lon=${locationData[0].lon}&cnt=5&exclude=hourly,minutely&units=metric&appid=${API_KEY}`
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}

export default getDailySelectedWeather;
