'use strict';

// Require the module under test
const basicMath = require('../lib/arithmetic.js');

// Require the node.js "assert" library
const assert = require('assert');

// For simplicity, create a local variable to re-use
let answer = '';

// Tests are documentation.  Is there any need to comment what these are doing?  NOT.
answer = basicMath.add();
assert.strictEqual(answer, null, 'Two parameters required');

answer = basicMath.add(2);
assert.strictEqual(answer, null, 'Two parameters required');

answer = basicMath.add(1, 2, 3);
assert.strictEqual(answer, null, 'Only two parameters are permitted');

answer = basicMath.add('one', 'two');
assert.strictEqual(answer, null, 'Strings are not permitted');

answer = basicMath.add([]);
assert.strictEqual(answer, null, 'Arrays Should Not Be Permitted');

answer = basicMath.add({});
assert.strictEqual(answer, null, 'Objects Should Not Be Permitted');