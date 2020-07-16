// see jsdom documentation at:
// https://github.com/jsdom/jsdom

const { getElement } = require('../src/index.js')

describe('DOM tests', function () {

  it('should allow testing DOM', function () {
    const element = getElement('div', 'hello world')
    expect(element.tagName).toBe('DIV')
    expect(element.outerHTML).toBe('<div>hello world</div>')
  })

  // This will not work, jsdom's implementation always returns 0.
  it('should run in virtual DOM environment', function () {
    const element = getElement('div', 'hello world')
    document.body.appendChild(element)
    element.style.width = '100px'
    element.style.height = '100px'
    const elementInfo = element.getBoundingClientRect()
    expect(elementInfo).toBe('x')
    expect(elementInfo.width).toBe(100)
    expect(elementInfo.height).toBe(100)
  })

})
