const Weather = (() => {
  function processData(data) {
    const name = data.name;
    const country = data.sys.country;
    const temp = data.main.temp;
    const weatherCondition = data.weather[0].main;
    const weatherDescription = data.weather[0].description;
    const weatherIcon = data.weather[0].icon;
    const time = data.dt;
    const pressure = data.main.pressure;
    const humidity = data.main.humidity;
    const minTemp = data.main.temp_min;
    const maxTemp = data.main.temp_max;
    return {
      name,
      country,
      temp,
      weatherCondition,
      weatherDescription,
      weatherIcon,
      time,
      pressure,
      humidity,
      minTemp,
      maxTemp,
    };
  }

  async function getWeather(location) {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=1a020968fb840e3784b048ba0413b0dd`,
        {
          mode: "cors",
        }
      );
      const data = await response.json();
      const processedData = processData(data);
      return processedData;
    } catch (error) {
      return null;
    }
  }

  return { getWeather };
})();

export default Weather;
