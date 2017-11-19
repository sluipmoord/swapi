import React from 'react'
import { Link } from 'react-router-dom'

const PeoplePage = ({ children, match }) => {
  return (
    <div>
      <h1> People </h1>
      <div>
        <Link to={`${match.url}/1/homeworld`}> Home World  </Link>
      </div>
      { children }
    </div>
  )
}

export default PeoplePage
