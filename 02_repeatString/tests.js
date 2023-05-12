const repeatString = require('./repeatString');

console.log(repeatString('hey', 3));
console.log(repeatString('hey', 10));
console.log(repeatString('hey', 0));
console.log(repeatString('hey', -1));
console.log(repeatString('', 10));
const number = Math.floor(Math.random() * 1000);
const str = repeatString('hey', number);
console.log(String(number) + " number of hey's " + (str.length / 3 == number)); 
