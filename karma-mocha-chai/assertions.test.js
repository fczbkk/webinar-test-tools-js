describe('Assertions', function () {

  // see documentation:
  // https://www.chaijs.com/api/assert/
  it('should use "assert" syntax', function () {
    // equation
    assert.equal('aaa', 'aaa')
    assert.deepEqual({ aaa: 'bbb' }, { aaa: 'bbb' })

    // numbers
    assert.isBelow(Math.PI, 4)
    assert.isAbove(Math.PI, 3)
    assert.closeTo(Math.PI, 3, 0.2)

    // arrays, objects
    assert.sameMembers([1, 2, 3], [3, 1, 2])
    assert.nestedProperty({ aaa: { bbb: { ccc: 'ddd' } } }, 'aaa.bbb.ccc')
  })

  // see documentation:
  // https://www.chaijs.com/api/bdd/
  it('should use "expect" syntax', function () {
    // equation
    expect('aaa').to.equal('aaa')
    expect({ aaa: 'bbb' }).to.deep.equal({ aaa: 'bbb' })

    // numbers
    expect(Math.PI).to.be.lessThan(4)
    expect(Math.PI).to.be.greaterThan(3)
    expect(Math.PI).to.be.closeTo(3, 0.2)

    // arrays, objects
    expect([1, 2, 3]).to.have.members([3, 1, 2])
    expect({ aaa: { bbb: { ccc: 'ddd'} } }).to.have.nested.property('aaa.bbb.ccc')
  })

})
