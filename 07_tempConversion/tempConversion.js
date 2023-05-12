const convertToCelsius = function(f) {
	return Math.round((5 * (f-32) / 9)* 10)/10;
};

const convertToFahrenheit = function(c) {
	return Math.round(((9 * c / 5) + 32) * 10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
