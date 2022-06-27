const Conversion = (() => {
  const kelvinToCelsius = (kelvin) => {
    const celsius = kelvin - 273.15;
    return celsius;
  };
  return { kelvinToCelsius };
})();

export default Conversion;
