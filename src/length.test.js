const stringLength = require('../src/length');
const reversed = require('../src/reversed');

describe('to test both funtions', () => {
  const string = 'this is me';
  test('return the length of a string', () => {
    expect(stringLength(string)).toBe(10);
  });

  test('to return a reversed string', () => {
    expect(reversed(string)).toMatch(/e m   s i   s i h t/);
  });
});
