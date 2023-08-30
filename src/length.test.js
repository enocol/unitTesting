const stringLength = require('../src/length');
//import stringLength from './length';
const string = '';
test('return the length of a string', () => {
  expect(() => stringLength(string)).toThrow(Error);
});
