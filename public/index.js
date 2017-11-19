import React from 'react'
import ReactDOM from 'react-dom'


import { createHashHistory } from 'history'

import { Provider } from 'react-redux'

import { createStore } from 'redux'

import configureStore from './app/store'
import Routes from './app/routes'

import { Root } from './app'


const initialState = {
  ...window.__INITIAL_STATE__ // User for server side rendering
}
const history = createHashHistory({
  basname: '',
  hashType: 'slash'
})

const store = configureStore(initialState, history)

ReactDOM.render(
  <Provider store={store}>
    <Root routes={Routes} history={history} />
  </Provider>,
  document.getElementById('root')
)
