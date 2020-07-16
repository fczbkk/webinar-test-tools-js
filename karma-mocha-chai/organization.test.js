// see documentation:
// https://mochajs.org/
describe('Test organization', function () {

  describe('Sub group', function () {

    describe('Sub-sub group', function () {

      it('should allow to nest test groups', function () {
        expect(true).to.equal(true)
      })

    })

  })

  describe('skipping', function () {

    // https://mochajs.org/#inclusive-tests
    it.skip('should not evaluate this test', function () {
      expect(true).to.equal(false)
    })

    // https://mochajs.org/#pending-tests
    it('should skip this test, because it is not defined')

    // https://mochajs.org/#exclusive-tests
    // it.only('should only run this test', function () {
    //   expect(true).to.equal(true)
    // })

  })

})
