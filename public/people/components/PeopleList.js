import moment from 'moment'

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Table, Progress } from 'reactstrap'

import { fetchPeople } from '../actions'
import { getPeople } from '../selectors'

class PeopleList extends Component {
  static propTypes = {
    isFetching: PropTypes.bool.isRequired,
    homeworldClick: PropTypes.func.isRequired,
    people: PropTypes.array
  }

  componentDidMount () {
    if (!this.props.isFetching && !this.props.currentPage) {
      this.props.fetchPeople()
    }
  }

  renderPerson = (person, i) => {
    return (<tr key={i}>
      <td> { person.name } </td>
      <td> { person.height } cm </td>
      <td> { person.mass } Kg </td>
      <td> { moment(person.created).format('YYYY-mm-D') } </td>
      <td> { moment(person.edited).format('YYYY-mm-D') } </td>
      <td> <a href="javascript://" onClick={() => this.onViewHomeworld(person) }> View Homeworld </a> </td>
    </tr>)
  }

  onViewHomeworld = (person) => {
    this.props.homeworldClick(person)
  }

  render() {
    const { isFetching, people = [] } = this.props

    let body
    if (isFetching) {
      body = <div>
        <h3> Loading </h3>
        <Progress animated color="info" value={100} />
      </div>
    } else {
      body = (
        <Table>
          <thead>
            <tr>
              <th> Name </th>
              <th> Height </th>
              <th> Mass </th>
              <th> Created </th>
              <th> Edited </th>
              <th> Planet </th>
            </tr>
          </thead>
          <tbody>
            {people.map(this.renderPerson)}
          </tbody>
        </Table>
      )
    }
    console.log(isFetching)
    return (
      <div>
        { body }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const { isFetching, currentPage } = state.people

  const props = {
    isFetching,
    people: getPeople({ state, page: currentPage }),
    currentPage
  }

  return props
}
const mapDispatchToProps = {
  fetchPeople
}

export default connect(mapStateToProps, mapDispatchToProps)(PeopleList)
