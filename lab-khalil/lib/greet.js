'use strict';

const greet = module.exports = {};

greet.hello = (name) => {
  if (typeof name !== 'string') {
    return null;
  }
  return `hello ${name}`;
};