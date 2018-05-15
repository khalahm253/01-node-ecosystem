'use strict';

const greet = require('../lib/greet.js');

const assert = require('assert');

let message = '';


assert.strictEqual(greet.greet(), null, 'One name is required');


assert.strictEqual(greet.greet('khalil', 'ahmed'), null, 'Only One parameter is permitted');


assert.strictEqual(greet.greet(1), null, 'NumbersShould Not Be Permitted');

message = greet.greet([]);
assert.strictEqual(message, null, 'Arrays Should Not Be Permitted');

message = greet.greet({});
assert.strictEqual(message, null, 'Objects Should Not Be Permitted');

message = greet.greet('John');
assert.strictEqual(message, 'hello John', `Output string does not match required (actual: "${message}", expected: "hello John")`);