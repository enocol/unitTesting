const stringLength = require('../src/length');

const string = '';
test('return the length of a string', () => {
  expect(() => stringLength(string)).toThrow(Error);
});
