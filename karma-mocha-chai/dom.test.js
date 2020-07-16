const { getElement } = require('./../src/index.js')

describe('DOM manipulation', function () {

  it('should create an element', function () {
    const element = getElement('div', 'hello world')
    expect(element.tagName).to.equal('DIV')
    expect(element.outerHTML).to.equal('<div>hello world</div>')
  })

  it('should be executed in real document', function () {
    const element = getElement('div', 'hello world')
    document.body.appendChild(element)
    element.style.width = '100px'
    element.style.height = '100px'
    const elementInfo = element.getBoundingClientRect()
    expect(elementInfo.width).to.equal(100)
    expect(elementInfo.height).to.equal(100)
  })

})
