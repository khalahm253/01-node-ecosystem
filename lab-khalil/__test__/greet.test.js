'use strict';

// Require the module under test
const hello = require('../lib/greet.js');
// Require the module under test
const basicMath = require('../lib/arithmetic.js');

// Require the node.js "assert" library
const assert = require('assert');

// For simplicity, create a local variable to re-use
let message = '';

// Tests are documentation.  Is there any need to comment what these are doing?  NOT.
message = hello.sayHello();
assert.strictEqual(message, null, 'One parameter is required');

message = hello.sayHello('john','cathy');
assert.strictEqual(message, null, 'Only One parameter is permitted');

message = hello.sayHello(1);
assert.strictEqual(message, null, 'Numeric Values Should Not Be Permitted');

message = hello.sayHello([]);
assert.strictEqual(message, null, 'Arrays Should Not Be Permitted');

message = hello.sayHello({});
assert.strictEqual(message, null, 'Objects Should Not Be Permitted');

message = hello.sayHello('John');
assert.strictEqual(message, 'Hello, John', `Output string does not match required (actual: "${message}", expected: "Hello, John")`);

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