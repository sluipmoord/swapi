import React from 'react'
import ReactDOM from 'react-dom'


import createHistory from 'history/createBrowserHistory'

import { Provider } from 'react-redux'

import { createStore } from 'redux'

import configureStore from './app/store'
import Routes from './app/routes'

import { Root } from './app'


const initialState = {
  ...window.__INITIAL_STATE__ // User for server side rendering
}
const store = configureStore(initialState)
const history = createHistory()

ReactDOM.render(
  <Provider store={store}>
    <Root routes={Routes} history={history} />
  </Provider>,
  document.getElementById('root')
)
