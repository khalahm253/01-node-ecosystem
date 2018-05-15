'use strict';

const greet = require('../lib/greet');

describe('greet.test.js', () => {
  test('Should return null when supplied non-string values', () => {
    expect(greet.hello(5)).toEqual(null);
  });
  test('Should return hello <string> when supplied a string', () => {
    expect(greet.hello('world')).toEqual('hello world');
  });
});