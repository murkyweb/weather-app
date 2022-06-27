const Weather = (() => {
  function processData(data) {
    const country = data.sys.country;
    const temp = data.main.temp;
    const pressure = data.main.pressure;
    const humidity = data.main.humidity;
    return { country, temp, pressure, humidity };
  }

  async function getWeather(location) {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=1a020968fb840e3784b048ba0413b0dd`,
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
