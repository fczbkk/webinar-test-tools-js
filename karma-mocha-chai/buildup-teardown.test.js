describe('Buildup and teardown', function () {

  let someVariable
  let temporaryElement

  beforeEach(function () {
    someVariable = 1

    temporaryElement = document.createElement('div')
    temporaryElement.className = 'tempElm'
    document.body.append(temporaryElement)
  })

  afterEach(function () {
    document.body.removeChild(temporaryElement)
  })

  it('should change variable value', function () {
    someVariable = 100
    expect(someVariable).to.equal(100)
  })

  it('should reset variable to original value after each test', function () {
    expect(someVariable).to.equal(1)
  })

  it('should remove temporary element after each test', function () {
    const temporaryElements = document.querySelectorAll('.tempElm')
    expect(temporaryElements.length).to.equal(1)
  })

})
