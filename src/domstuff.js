import Weather from "./app";

const DOMstuff = (() => {
  async function populate(n) {
    const data = await Weather.getWeather(`${n}`);
    const weather = document.querySelector(".weather");
    const location = document.querySelector(".location");
    const temp = document.querySelector(".temp");
    const humidity = document.querySelector(".humidity");
    const pressure = document.querySelector(".pressure");
    const minTemp = document.querySelector(".min-temp");
    const maxTemp = document.querySelector(".max-temp");

    location.innerHTML = `<span>${data.name}</span><span>${data.country}</span>`;
    temp.innerHTML = `<span>${data.temp}</span>`;
    humidity.innerHTML = `<span>Humidity </span><span>${data.humidity}</span>`;
    pressure.innerHTML = `<span>Pressure </span><span>${data.pressure}</span>`;
    minTemp.innerHTML = `<span>Min. Temperature </span><span>${data.minTemp}</span>`;
    maxTemp.innerHTML = `<span>Max. Temperature </span><span>${data.maxTemp}</span>`;
    weather.className = "weather show";
  }

  return { populate };
})();

export default DOMstuff;
