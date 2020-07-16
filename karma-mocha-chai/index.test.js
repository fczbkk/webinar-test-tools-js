const { multiply } = require('./../src/index.js')

describe('Multiply', function () {

  it('should multiply two numbers', function () {
    const result = multiply(2, 3)
    expect(result).to.equal(6)
  })

  it('should multiply negative number', function () {
    const result = multiply(2, -3)
    expect(result).to.equal(-6)
  })

})
