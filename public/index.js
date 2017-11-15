import React from 'react'
import ReactDOM from 'react-dom'


import { Provider } from 'react-redux'
import { createStore } from 'redux'

import configureStore from './app/store'
import { Root } from './app'


const initialState = {
  ...window.__INITIAL_STATE__ // User for server side rendering
}
const store = configureStore(initialState)

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root')
)
