// see documentation for more info:
// https://nodejs.org/api/assert.html

const assert = require('assert')
const {multiply} = require('./../src/index.js')

assert.strictEqual(multiply(2, 3), 6, 'basic multiplication')
assert.strictEqual(multiply(2, -3), -6, 'multiplication by negative number')
