import Weather from "./app";
import Conversion from "./measureConversion";

const DOMstuff = (() => {
  const resetInput = () => {
    const input = document.getElementById("location");
    input.value = "";
    input.blur();
  };

  async function populate(zone) {
    try {
      const errorMessage = document.querySelector(".error");
      errorMessage.textContent = "";
      errorMessage.className = "error";

      const data = await Weather.getWeather(`${zone}`);

      const weather = document.querySelector(".weather");
      const location = document.querySelector(".location");
      const temp = document.querySelector(".temp");
      const weatherCondition = document.querySelector(".weather-condition");
      const humidity = document.querySelector(".humidity");
      const pressure = document.querySelector(".pressure");
      const minTemp = document.querySelector(".min-temp");
      const maxTemp = document.querySelector(".max-temp");
      const time = document.querySelector(".second-row");
      const weatherIcon = document.querySelector(".weather-img");
      const weatherDescription = document.querySelector(".weather-description");

      location.innerHTML = `<span>${data.name}</span><span>${data.country}</span>`;
      temp.innerHTML = `<span>${Conversion.kelvinToCelsius(
        data.temp
      )} °C</span>`;
      weatherCondition.innerHTML = `<span>${data.weatherCondition}</span>`;
      humidity.innerHTML = `<span>Humidity </span><span>${data.humidity} %</span>`;
      pressure.innerHTML = `<span>Pressure </span><span>${data.pressure} hPa</span>`;
      minTemp.innerHTML = `<span>Min. Temperature </span><span>${Conversion.kelvinToCelsius(
        data.minTemp
      )} °C</span>`;
      maxTemp.innerHTML = `<span>Max. Temperature </span><span>${Conversion.kelvinToCelsius(
        data.maxTemp
      )} °C</span>`;
      time.innerHTML = `<span>${Conversion.unixTimestampToDate(
        data.time
      )} </span>`;
      weatherIcon.style.backgroundImage = `url("http://openweathermap.org/img/wn/${data.weatherIcon}@2x.png")`;
      weatherIcon.style.width = "80px";
      weatherIcon.style.height = "60px";
      weatherDescription.innerHTML = `<span>${data.weatherDescription}</span>`;
      weather.className = "weather show";
    } catch (error) {
      const errorMessage = document.querySelector(".error");
      errorMessage.textContent = "Location not found";
      errorMessage.className = "error active";
      console.log("error");
    }
  }

  return { populate, resetInput };
})();

export default DOMstuff;
