// see documentation at:
// https://jestjs.io/

const { multiply, asyncMultiply } = require('../src/index.js')

describe('regular tests', function () {

  it('should work just like Karma / Mocha / Chai', function () {
    expect(multiply(2, 3)).toBe(6)
  })

  it('should support async tests', function (done) {
    asyncMultiply(2, 3)
      .then((result) => expect(result).toBe(6))
      .then(() => done())
  })

})
