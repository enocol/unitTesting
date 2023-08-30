import stringLength from './length.js';
import reversed from './reversed.js';

const string = 'This.';
const result = stringLength(string);

const join = reversed(result);
console.log(join);
