const { asyncMultiply } = require('./../src/index.js')

describe('Asynchronous', function () {

  it('should multiply two numbers', function (done) {
    asyncMultiply(2, 3)
      .then((result) => expect(result).to.equal(6))
      .then(() => done())
  })

  it('should multiply negative number', function (done) {
    asyncMultiply(2, -3)
      .then((result) => expect(result).to.equal(-6))
      .then(() => done())
  })

})
