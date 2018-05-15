'use strict';

const arithmetic = require('../lib/arithmetic.js');

const assert = require('assert');

let message = '';


assert.strictEqual(arithmetic.add(), null, 'Two Parameters Are Needed');


assert.strictEqual(arithmetic.add(1), null, 'Two Parameters Are Needed');


assert.strictEqual(arithmetic.add('khalil', 'ahmed'), null, 'Only Numeric Parameters Are Allowed');

assert.strictEqual(arithmetic.add(2, 'ahmed'), null, 'Only Numeric Parameters Are Permitted');

message = arithmetic.add([], []);
assert.strictEqual(message, null, 'Arrays Should Not Be Permitted');

message = arithmetic.add({}, {});
assert.strictEqual(message, null, 'Objects Should Not Be Permitted');

message = arithmetic.add(2, 2);
assert.strictEqual(message, 4, `Output string does not match required (actual: "${message}", expected: 4)`);


assert.strictEqual(arithmetic.sub(), null, 'Two Parameters Are Required');


assert.strictEqual(arithmetic.sub(1), null, 'Two Parameters Are Required');


assert.strictEqual(arithmetic.sub(),'khalil', 'ahmed', null, 'Only Numbers Are Permitted');


assert.strictEqual(arithmetic.sub(2, 'ahmed'), null, 'Only Numbers Are Permitted');

message = arithmetic.sub([], []);
assert.strictEqual(message, null, 'Arrays Should Not Be Permitted');

message = arithmetic.sub({}, {});
assert.strictEqual(message, null, 'Objects Should Not Be Permitted');

message = arithmetic.sub(7, 5);
assert.strictEqual(message, 2, `Output string does not match required (actual: "${message}", expected: 2)`);