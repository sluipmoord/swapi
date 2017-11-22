import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import { peopleReducer } from '../people'
import { planetsReducer } from '../planets'

const reducers = {
  people: peopleReducer,
  planets: planetsReducer
}

const appReducer = combineReducers({
  ...reducers,
  routing: routerReducer,
})

const rootReducer = (state, action) => {
  return appReducer(state, action)
}
export default rootReducer
