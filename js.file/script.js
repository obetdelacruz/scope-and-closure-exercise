function createTemperatureConverter() {
  const toCelcius = (fahrenheit) => (fahrenheit - 32) / 1.8;
  const toFarenheight = (celcius) => celcius * 1.8 + 32;

  return {
    toCelcius,
    toFarenheight,
  };
}

const temperatureConverter = createTemperatureConverter();
console.log(temperatureConverter.toCelcius(90));
console.log(temperatureConverter.toFarenheight(32.22222222222222));
