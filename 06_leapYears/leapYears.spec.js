const leapYears = require('./leapYears')

console.log("Should be T F T F T F");
console.log(leapYears(1996));
console.log(leapYears(1997));
console.log(leapYears(34992));
console.log(leapYears(1900));
console.log(leapYears(1600));
console.log(leapYears(700));
/*
describe('leapYears', () => {
  test('works with non century years', () => {
    expect(leapYears(1996)).toBe(true);
  });
  test.skip('works with non century years', () => {
    expect(leapYears(1997)).toBe(false);
  });
  test.skip('works with ridiculously futuristic non century years', () => {
    expect(leapYears(34992)).toBe(true);
  });
  test.skip('works with century years', () => {
    expect(leapYears(1900)).toBe(false);
  });
  test.skip('works with century years', () => {
    expect(leapYears(1600)).toBe(true);
  });
  test.skip('works with century years', () => {
    expect(leapYears(700)).toBe(false);
  });
});
*/
