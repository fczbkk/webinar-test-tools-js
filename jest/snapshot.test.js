// see jsdom documentation at:
// https://github.com/jsdom/jsdom

const { getElement } = require('../src/index.js')

describe('Snapshots', function () {

  it('should compare to previously saved snapshot', function () {
    const element = getElement('div', 'hello xxx')
    expect(element).toMatchSnapshot()
  })

})
