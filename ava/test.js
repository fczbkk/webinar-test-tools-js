const test = require('ava')
const { multiply, asyncMultiply } = require('./../src/index.js')

test('multiply 2*3', t => {
  t.is(multiply(2, 3), 6)
})

test('multiply 2*4', t => {
  t.is(multiply(2, 4), 8)
})

test('multiply 2*5', t => {
  t.is(multiply(2, 5), 10)
})

test('asyncMultiply 2*3', async t => {
  t.is(await asyncMultiply(2, 3), 6)
})

test('asyncMultiply 2*4', async t => {
  t.is(await asyncMultiply(2, 4), 8)
})

test('asyncMultiply 2*5', async t => {
  t.is(await asyncMultiply(2, 5), 10)
})
