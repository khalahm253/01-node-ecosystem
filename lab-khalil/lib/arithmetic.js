'use strict';

// Prep our interface mechanism (module.exports)
module.exports = exports = {};

/**
 * Interface Method: sayHello(name)
 * @param {string} name
 * @returns {string}
 */
exports.add = (...args) => {
  if(args.every(el => typeof(el) !== 'number') || args.length !==2) { return null; }
  return args[0]+args[1];
};

/**
 * sayGoodbye()
 * @returns {string}
 */
exports.sub = (...args) => {
  if(args.every(el => typeof(el) !== 'number') || args.length !==2) { return null; }
  return args[0]-args[1];
};