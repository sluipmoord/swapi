import React, { Component } from 'react'
import { connect } from 'react-redux'

import 'bootstrap/dist/css/bootstrap.css'
import { Link } from 'react-router-dom'

class App extends Component {

  componentDidMount() {
  }

  render() {
    const { children } = this.props
    return (
      <div>
        <h1> Home <Link to="/about">About</Link> </h1>
      </div>
    )
  }
}

export default App
