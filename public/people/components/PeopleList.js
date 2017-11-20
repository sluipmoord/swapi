import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchPeople } from '../actions'

class PeopleList extends Component {

  componentDidMount () {
    console.log(this.props.fetchPeople());

  }
  render() {
    return (<p> List </p>)
  }
}

const mapStateToProps = () => {
  return {}
}
const mapDispatchToProps = {
  fetchPeople
}

export default connect(mapStateToProps, mapDispatchToProps)(PeopleList)
