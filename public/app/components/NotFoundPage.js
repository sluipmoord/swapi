import React from 'react'
import { Link } from 'react-router-dom'

export default ({ location }) => (
  <div>
    <h1> 404 Error </h1>
    <h3> This is not the page you are looking for </h3>
    <p> Go back <Link to='/'> home </Link> </p>
  </div>
)
