import React, { Component } from 'react'
import { connect } from 'react-redux'

class App extends Component {

  componentDidMount() {
  }

  render() {
    const { children } = this.props
    return (
      <div>
        <p> hello </p>
        { children }
      </div>
    )
  }
}
