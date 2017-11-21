import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import PeopleList from './PeopleList'

class PeoplePage extends Component {

  handleHomeworldClick = (person) => {
    const personURIparam = person.url.replace(API_BASE_URL + 'people', '')
    const personId = personURIparam.replace(/\//g, '')

    this.props.history.push(`/people/${personId}/homeworld`)
    
    console.log(API_BASE_URL,  personId);
  }

  render () {
    const { children, match } = this.props
    return (
      <div>
        <h1> Character List </h1>
        <br />
        <PeopleList homeworldClick={this.handleHomeworldClick} />
        { children }
      </div>
    )
  }
}

export default PeoplePage
