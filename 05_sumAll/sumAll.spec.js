const sumAll = require('./sumAll')

console.log("1,4 => 10? " + sumAll(1,4));

console.log("1,4000 => 8002000? " + sumAll(1,4000));
console.log("123,1 => 7626? " + sumAll(123,1));
console.log("-10,4 => ERROR?" + sumAll(-10,4));
console.log("10 ,\"90\" => ERROR? " + sumAll(10,"90"));
console.log("10 ,[90, 1] => ERROR? " + sumAll(10,[90,1]));
/*
describe('sumAll', () => {
  test('sums numbers within the range', () => {
    expect(sumAll(1, 4)).toEqual(10);
  });
  test.skip('works with large numbers', () => {
    expect(sumAll(1, 4000)).toEqual(8002000);
  });
  test.skip('works with larger number first', () => {
    expect(sumAll(123, 1)).toEqual(7626);
  });
  test.skip('returns ERROR with negative numbers', () => {
    expect(sumAll(-10, 4)).toEqual('ERROR');
  });
  test.skip('returns ERROR with non-number parameters', () => {
    expect(sumAll(10, "90")).toEqual('ERROR');
  });
  test.skip('returns ERROR with non-number parameters', () => {
    expect(sumAll(10, [90, 1])).toEqual('ERROR');
  });
});

*/
