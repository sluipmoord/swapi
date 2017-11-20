import React from 'react'
import { Link } from 'react-router-dom'

import PeopleList from './PeopleList'

const PeoplePage = ({ children, match }) => {
  return (
    <div>
      <h1> People </h1>
      <div>
        <Link to={`${match.url}/1/homeworld`}> Home World  </Link>
      </div>
      <PeopleList />
      { children }
    </div>
  )
}

export default PeoplePage
