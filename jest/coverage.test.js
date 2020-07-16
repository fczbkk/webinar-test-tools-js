const { doSomething } = require('./coverage.js')

describe('Coverage', function () {

  it('should do something', function () {
    expect(doSomething()).toBe('something')
  })

})
