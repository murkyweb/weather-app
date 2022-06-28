const Conversion = (() => {
  const kelvinToCelsius = (kelvin) => {
    const celsius = Math.round((kelvin - 273.15) * 10) / 10;
    return celsius;
  };

  const unixTimestampToDate = (timestamp) => {
    const milliseconds = timestamp * 1000;
    const dateObj = new Date(milliseconds);
    const humanReadableDate = dateObj.toLocaleString("en-US", {
      hour: "numeric",
      weekday: "long",
      day: "numeric",
      month: "long",
    });
    return humanReadableDate;
  };
  return { kelvinToCelsius, unixTimestampToDate };
})();

export default Conversion;
