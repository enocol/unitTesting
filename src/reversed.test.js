//import reversed from './reversed';
const reversed = require('../src/reversed');
const string = 'this is me';

test('to return a reversed string', () => {
  expect(reversed(string)).toMatch(/e m   s i   s i h t/);
});
