'use strict';

const arithmetic = require('../lib/arithmetic');

describe('arithmetic.add', () => {
  test('Should return sum of two numbers', () => {
    expect(arithmetic.add(2, 4)).toEqual(6);
  });
  test('Should return null if first argument is not a number', () => {
    expect(arithmetic.add('blue', 4)).toEqual(null);
  });
  test('Should return null if second argument is not a number', () => {
    expect(arithmetic.add(2, 'dog')).toEqual(null);
  });
});

describe('arithmetic.sub', () => {
  test('Should return the second number subtracted from the first', () => {
    expect(arithmetic.sub(2, 4)).toEqual(-2);
  });
  test('Should return null if first argument is not a number', () => {
    expect(arithmetic.sub('blue', 4)).toEqual(null);
  });
  test('Should return null if second argument is not a number', () => {
    expect(arithmetic.sub(2, 'dog')).toEqual(null);
  });
});