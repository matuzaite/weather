const API_KEY = `b7fe81d6f5a2a80d0863fbc325ce583f`;

async function getCurrentSelectedWeather(cityName) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}

export default getCurrentSelectedWeather;
