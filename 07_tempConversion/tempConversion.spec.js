const {convertToCelsius, convertToFahrenheit} = require('./tempConversion')

console.log("0, 37.8, -73.3, 32, 163.8, 14");
console.log(convertToCelsius(32));
console.log(convertToCelsius(100));
console.log(convertToCelsius(-100));

console.log(convertToFahrenheit(0));
console.log(convertToFahrenheit(73.2));
console.log(convertToFahrenheit(-10));
/*
describe('convertToCelsius', () => {
  test('works', () => {
    expect(convertToCelsius(32)).toEqual(0);
  });
  test.skip('rounds to 1 decimal', () => {
    expect(convertToCelsius(100)).toEqual(37.8);
  });
  test.skip('works with negatives', () => {
    expect(convertToCelsius(-100)).toEqual(-73.3);
  });
});

describe('convertToFahrenheit', () => {
  test.skip('works', () => {
    expect(convertToFahrenheit(0)).toEqual(32);
  });
  test.skip('rounds to 1 decimal', () => {
    expect(convertToFahrenheit(73.2)).toEqual(163.8);
  });
  test.skip('works with negatives', () => {
    expect(convertToFahrenheit(-10)).toEqual(14);
  });
});
*/
