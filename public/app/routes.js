import React from 'react'
import { Route } from 'react-router'
import { Link } from 'react-router-dom'

import App from './components/App'


export default (
  <div>
    <Route exact path="/" component={App} />
    <Route path="/about" component={() => (<h1>About <Link to="/">Home</Link></h1>)} />
  </div>
)
