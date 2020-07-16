import React from 'react'

export default class MyComponent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      greeting: 'hello'
    }
  }

  render () {
    return (
      <div className="myComponent">
        { this.state.greeting } world
      </div>
    )
  }
}
