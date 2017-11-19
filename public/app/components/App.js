import React, { Component } from 'react'
import { connect } from 'react-redux'

import 'bootstrap/dist/css/bootstrap.css'
import { Link } from 'react-router-dom'

import './app.scss'

class App extends Component {

  componentDidMount() {
  }

  render() {
    const { children } = this.props
    return (
      <div id="App">
        <h1>
          Star Wars Wiki
        </h1>
        <p> <Link to="/people"> Character list </Link> </p>
        { children }
      </div>
    )
  }
}

export default App
