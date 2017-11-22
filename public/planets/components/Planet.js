import moment from 'moment'

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText
} from 'reactstrap';

import { fetchPlanet } from '../actions'
import { getPlanet } from '../selectors'
import { Loading } from '../../utils'


class Planet extends Component {
  static propTypes = {

  }

  componentDidMount () {
    if (!this.props.isFecthing && !this.props.planet) {
      this.props.fetchPlanet({url: this.props.planetUrl })
    }
  }

  render() {
    const { isFetching, planet } = this.props

    console.log(planet);

    let body
    if (isFetching) {
      body = <Loading />
    } else if (planet) {
      body = <ListGroup>
        <ListGroupItem>
          <ListGroupItemHeading>Name</ListGroupItemHeading>
          <ListGroupItemText>
            { planet.name }
          </ListGroupItemText>
        </ListGroupItem>
        <ListGroupItem>
          <ListGroupItemHeading>Diameter</ListGroupItemHeading>
          <ListGroupItemText>
            { planet.diameter }
          </ListGroupItemText>
        </ListGroupItem>
        <ListGroupItem>
          <ListGroupItemHeading>Climate</ListGroupItemHeading>
          <ListGroupItemText>
            { planet.climate }
          </ListGroupItemText>
        </ListGroupItem>
        <ListGroupItem>
          <ListGroupItemHeading>Climate</ListGroupItemHeading>
          <ListGroupItemText>
            { planet.population }
          </ListGroupItemText>
        </ListGroupItem>
      </ListGroup>
    }

    return (
      <div>
        { body }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const { isFetching, planetsById } = state.planets

  const props = {
    isFetching,
    planet: getPlanet({ state, url: ownProps.planetUrl })
  }

  return props
}
const mapDispatchToProps = {
  fetchPlanet
}

export default connect(mapStateToProps, mapDispatchToProps)(Planet)
