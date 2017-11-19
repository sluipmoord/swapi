import React from 'react'
import PropTypes from 'prop-types'
import { ConnectedRouter } from 'react-router-redux'

import './root.scss';

const Root = ({ history, routes }) => (
  <ConnectedRouter history={history}  >
    <div id="Root">
      {routes}
    </div>
  </ConnectedRouter>
)

Root.propTypes = {
  history: PropTypes.object.isRequired,
  routes: PropTypes.object.isRequired
}

export default Root
