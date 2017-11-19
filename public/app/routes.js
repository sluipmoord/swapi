import React from 'react'
import { Route } from 'react-router'

import { App } from './components'
import { PeoplePage, HomeworldPage } from '../people'


export default (
  <div>
    <Route exact path="/" component={App} />
    <Route path="/people" component={PeoplePage} />
    <Route path="/people/:id/homeworld" component={HomeworldPage} />
  </div>
)
