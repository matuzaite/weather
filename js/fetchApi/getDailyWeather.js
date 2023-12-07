const API_KEY = `b7fe81d6f5a2a80d0863fbc325ce583f`;

async function getDailyWeather(latitude, longitude) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&cnt=5&exclude=hourly,minutely&units=metric&appid=${API_KEY}`
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}

export default getDailyWeather;
