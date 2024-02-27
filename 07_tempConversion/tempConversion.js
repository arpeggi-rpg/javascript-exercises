const convertToCelsius = function(fahrTemp) {
  return +(((fahrTemp - 32) * (5/9)).toFixed(1));
};

const convertToFahrenheit = function(celTemp) {
  return +((celTemp * (9/5) + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
