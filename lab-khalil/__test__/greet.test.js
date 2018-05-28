'use strict';

const greet = require('../lib/greet.js');

const assert = require('assert');

let message = '';


assert.strictEqual(greet.hello(), null, 'One name is required');


assert.strictEqual(greet.hello('khalil', 'ahmed'), null, 'Only One parameter is permitted');


assert.strictEqual(greet.hello(1), null, 'NumbersShould Not Be Permitted');

message = greet.hello([]);
assert.strictEqual(message, null, 'Arrays Should Not Be Permitted');

message = greet.hello({});
assert.strictEqual(message, null, 'Objects Should Not Be Permitted');

message = greet.hello('John');
assert.strictEqual(message, 'hello John', `Output string does not match required (actual: "${message}", expected: "hello John")`);