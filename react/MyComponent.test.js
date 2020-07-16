import React from 'react'
import MyComponent from './MyComponent.jsx'
import renderer from 'react-test-renderer'

describe('MyComponent', function () {

  it('should work with react component', function () {
    const tree = renderer
      .create(<MyComponent />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

})
