import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { browserHistory } from 'react-router'
import { routerMiddleware } from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'

import rootReducer from './rootReducer'
import { apiMiddleware, normalizeResponseMiddleware } from './middlewares'

const composeEnhancers = composeWithDevTools({
  actionsBlacklist: ['@@router/*']
})


const configureStore = (preloadedState, history) => {
  const routingMiddleware = routerMiddleware(history)
  const store = createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(
      applyMiddleware(
        thunkMiddleware,
        routingMiddleware,
        apiMiddleware,
        normalizeResponseMiddleware
      )
    )
  )

  return store
}

export default configureStore
