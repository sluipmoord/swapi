import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import { peopleReducer } from '../people'

const reducers = {
  people: peopleReducer
}

const appReducer = combineReducers({
  ...reducers,
  routing: routerReducer,
})

const rootReducer = (state, action) => {
  return appReducer(state, action)
}
export default rootReducer
