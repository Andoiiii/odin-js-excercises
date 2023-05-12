const reverseString = require('./reverseString')

console.log("hello" + " => " + reverseString("hello"));
console.log("hello there" + " => " + reverseString("hello there"));
console.log("123! abc!" + " => " + reverseString("123! abc!"));
console.log("" + " => " + reverseString(""));
/*
describe('reverseString', () => {
  test('reverses single word', () => {
    expect(reverseString('hello')).toEqual('olleh');
  });

  test.skip('reverses multiple words', () => {
    expect(reverseString('hello there')).toEqual('ereht olleh')
  })

  test.skip('works with numbers and punctuation', () => {
    expect(reverseString('123! abc!')).toEqual('!cba !321')
  })
  test.skip('works with blank strings', () => {
    expect(reverseString('')).toEqual('')
  })
});
*/
