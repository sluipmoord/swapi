import React from 'react'
import PropTypes from 'prop-types'
import { ConnectedRouter } from 'react-router-redux'

import './Root.scss';

const Root = ({ history, routes }) => (
  <ConnectedRouter history={history}  >
    {routes}
  </ConnectedRouter>
)

Root.propTypes = {
  history: PropTypes.object.isRequired,
  routes: PropTypes.object.isRequired
}

export default Root
